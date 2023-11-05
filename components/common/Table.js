"use client";
import React, { useEffect, useState } from "react";
import { Avatar } from "../ui/avatar";
import { useUser } from "@/lib/store/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Table = ({ table }) => {
  const arr = new Array(9).fill("x");

  const [loading, setLoading] = useState(true);
  const userId = useUser((state) => state.id);

  const updateSeat = useUser((state) => state.updateCol);
  const updateRow = useUser((state) => state.updateRow);
  const searchedId = useUser((state) => state.searchedId);

  const isBatchManager = useUser((state) => state.isBatchManager);

  const [columnA, setColumnA] = useState([]);
  const [columnB, setColumnB] = useState([]);
  const [columnC, setColumnC] = useState([]);
  const [columnD, setColumnD] = useState([]);
  const [columnE, setColumnE] = useState([]);
  const [columnF, setColumnF] = useState([]);
  const [columnG, setColumnG] = useState([]);

  const [selectedUser, setSelectedUser] = useState([]);

  const generateSeat = (row, col, sectionName) => {
    const rows = row;
    const columns = col;
    const twoDArray = new Array(rows);
    for (let i = 0; i < rows; i++) {
      twoDArray[i] = new Array(columns);
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        twoDArray[i][j] = {
          name: "Blank",
          location: "A-" + (i + 1) + "-" + (j + 1),
          id: "A-" + (i + 1) + "-" + (j + 1),
          email: "Blank",
          available: true,
        };
      }
    }

    for (let i = 0; i < rows; i++) {
      console.log(twoDArray, "this is two d array ", sectionName);
    }

    switch (sectionName) {
      case "A":
        setColumnA(twoDArray);
        break;
      case "B":
        setColumnB(twoDArray);
        break;
      case "C":
        setColumnC(twoDArray);
        break;
      case "D":
        setColumnD(twoDArray);
        break;
      case "E":
        setColumnE(twoDArray);
        break;
      case "F":
        setColumnF(twoDArray);
        break;
      case "G":
        setColumnG(twoDArray);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const sectionA = [...columnA];
    const sectionB = [...columnB];
    const sectionC = [...columnC];
    const sectionD = [...columnD];
    const sectionE = [...columnE];
    const sectionF = [...columnF];
    const sectionG = [...columnG];

    for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table[i].length; j++) {
        const user = table[i][j];
        const column = user.location.split("-")[0];
        const row = user.location.split("-")[1];
        const col = user.location.split("-")[2];
        // console.log(col, row, "this is column", column);

        switch (column) {
          case "A":
            sectionA[row][col] = user;
            break;
          case "B":
            sectionB[row][col] = user;
            break;
          case "C":
            sectionC[row][col] = user;
            break;
          case "D":
            sectionD[row][col] = user;
            break;
          case "E":
            sectionE[row][col] = user;
            break;
          case "F":
            sectionF[row][col] = user;
            break;
          case "G":
            sectionG[row][col] = user;
            break;
          default:
            break;
        }

        setColumnA(sectionA);
        setColumnB(sectionB);
        setColumnC(sectionC);
        setColumnD(sectionD);
        setColumnE(sectionE);
        setColumnF(sectionF);
        setColumnG(sectionG);
        setLoading(false);
      }
    }
  }, [table]);

  useEffect(() => {
    handle({ userId });
  }, [loading]);

  useEffect(() => {
    handle({ userId: searchedId });
  }, [searchedId]);

  useEffect(() => {
    generateSeat(9, 4, "A");
    generateSeat(9, 3, "B");
    generateSeat(9, 3, "C");
    generateSeat(9, 3, "D");
    generateSeat(9, 3, "E");
    generateSeat(9, 4, "F");
    generateSeat(9, 3, "G");
  }, []);

  console.log(columnA, "this is column g");
  function getInitials(name) {
    const words = name.split(" ");

    // console.log(words, "this is words");

    let initials = "";

    let count = 0;

    for (let i = 0; i < words.length; i++) {
      if (words[i][0] != undefined && count < 2) {
        initials += words[i][0];
        count++;
      }
    }

    initials = initials.toUpperCase();

    return initials;
  }

  const handle = ({ userId }) => {
    const divRef = document.getElementById(userId);
    if (divRef) {
      divRef.scrollIntoView({ behavior: "smooth" });
    }
    console.log(divRef);
  };

  useEffect(() => {}, []);
  function generateUniqueIdFromString(inputString) {
    const uniqueId = inputString.replace(/\s+/g, "").toLowerCase();
    return uniqueId;
  }

  function toTitleCase(text) {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const showDialog = (id, columnName) => {
    // if (isBatchManager) {
    //   alert("You are not allowed to change the seat");
    // }

    setSelectedUser([...selectedUser, id]);
  };

  const getCellIte = (tableList, index, color, columnName) => {
    return (
      <td className={`p-8 ${color}`}>
        <div className="flex gap-4">
          {tableList[index].map((cell) => {
            const opacity =
              cell && cell.name === "Blank" ? "opacity-20" : "opacity-100";
            const cellId = generateUniqueIdFromString(
              cell.name + cell.batchNumber
            );

            const borderBlue =
              cellId == userId && isBatchManager != true
                ? "border-green-600 border-[4px] "
                : "";

            const borderRed = selectedUser.includes(cellId)
              ? "border-blue-600 border-[4px] "
              : "";

            if (cellId == userId) {
              updateSeat(columnName);
              updateRow(index + 1);
            }

            return (
              <Dialog>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>

                <div
                  onClick={() => showDialog(cellId, cell.batchNumber)}
                  id={cellId}
                  className={`h-[100px] bg-gray-950 flex flex-col gap-2 text-center justify-center items-center w-[100px] ${borderBlue} ${borderRed} border border-gray-600 rounded-lg ${opacity}`}
                >
                  <Avatar className="flex items-center justify-center h-[2rem] w-[2rem] border border-gray-700">
                    {getInitials(cell.name)}
                  </Avatar>
                  <span className="text-[10px]">{toTitleCase(cell.name)}</span>
                </div>
              </Dialog>
            );
          })}
        </div>
      </td>
    );
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="overflow-auto max-h-[60vh] lg:max-h-full">
      <table className="table-fixed relative">
        <thead className="relative">
          <tr className="text-center sticky-header-row  top-0">
            <th className="  sticky  text-[12px] left-0 bg-gray-900 text-white">
              Row
            </th>
            <th className=" text-[12px] opacity-100 bg-gray-800">G</th>
            <th className=" text-[12px] opacity-100  bg-gray-900">F</th>
            <th className=" text-[12px] opacity-100 bg-gray-800">E</th>
            <th className=" text-[12px] opacity-100 bg-gray-900">D</th>
            <th className=" text-[12px] opacity-100 bg-gray-800">C</th>
            <th className=" text-[12px] opacity-100 bg-gray-900">B</th>
            <th className=" text-[12px] opacity-100 bg-gray-800">A</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => {
            return (
              <tr key={index} className="text-left   ">
                <td className=" text-center h-[100%] text-[12px] p-0 sticky left-0 bg-gray-600">
                  {index + 1}
                </td>
                {getCellIte(columnG, index, "bg-gray-900", "G")}
                {/* {console.log(columnC, "this is final oclumen a")} */}
                {getCellIte(columnF, index, "bg-gray-800", "F")}
                {getCellIte(columnE, index, "bg-gray-900", "E")}
                {getCellIte(columnD, index, "bg-gray-800", "D")}
                {getCellIte(columnC, index, "bg-gray-900", "C")}
                {getCellIte(columnB, index, "bg-gray-800", "B")}
                {getCellIte(columnA, index, "bg-gray-900", "A")}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
