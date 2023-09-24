"use client";
import React, { useEffect, useState } from "react";
import { Avatar } from "../ui/avatar";
import { useUser } from "@/lib/store/store";

const Table = ({ table }) => {
  const arr = new Array(9).fill("x");

  const [loading, setLoading] = useState(true);
  const userId = useUser((state) => state.id);

  const updateSeat = useUser((state) => state.updateCol);
  const updateRow = useUser((state) => state.updateRow);
  const searchedId = useUser((state) => state.searchedId);

  const [columnA, setColumnA] = useState([]);
  const [columnB, setColumnB] = useState([]);
  const [columnC, setColumnC] = useState([]);
  const [columnD, setColumnD] = useState([]);
  const [columnE, setColumnE] = useState([]);
  const [columnF, setColumnF] = useState([]);
  const [columnG, setColumnG] = useState([]);

  useEffect(() => {
    setColumnA([]);
    setColumnB([]);
    setColumnC([]);
    setColumnD([]);
    setColumnE([]);
    setColumnF([]);
    setColumnG([]);
    for (let i = 0; i < table.length; i++) {
      const rowA = [];
      const rowB = [];
      const rowC = [];
      const rowD = [];
      const rowE = [];
      const rowF = [];
      const rowG = [];

      for (let j = 0; j < table[i].length; j++) {
        const item = table[i][j];
        switch (item.column) {
          case "A":
            rowA.push(item);
            break;
          case "B":
            rowB.push(item);
            break;
          case "C":
            rowC.push(item);
            break;
          case "D":
            rowD.push(item);
            break;
          case "E":
            rowE.push(item);
            break;
          case "F":
            rowF.push(item);
            break;
          case "G":
            rowG.push(item);
            break;
          default:
            break;
        }
      }

      setColumnA((prevColumnA) => [...prevColumnA, rowA]);
      setColumnB((prevColumnB) => [...prevColumnB, rowB]);
      setColumnC((prevColumnC) => [...prevColumnC, rowC]);
      setColumnD((prevColumnD) => [...prevColumnD, rowD]);
      setColumnE((prevColumnE) => [...prevColumnE, rowE]);
      setColumnF((prevColumnF) => [...prevColumnF, rowF]);
      setColumnG((prevColumnG) => [...prevColumnG, rowG]);

      setLoading(false);
    }
  }, [table]);

  useEffect(() => {
    handle({ userId });
  }, [loading]);

  useEffect(() => {
    handle({ userId: searchedId });
  }, [searchedId]);

  console.log(columnG, "this is column g");
  function getInitials(name) {
    const words = name.split(" ");

    let initials = "";

    for (let i = 0; i < words.length; i++) {
      initials += words[i][0];
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

  const getCellIte = (tableList, index, color, columnName) => {
    return (
      <td className={`p-8 ${color}`}>
        <div className="flex gap-4">
          {tableList[index].map((cell) => {
            const opacity =
              cell && cell.name === "Blank" ? "opacity-20" : "opacity-100";
            const cellId = generateUniqueIdFromString(cell.name + cell.batch);

            const borderBlue =
              cellId == userId ? "border-green-600 border-[4px] " : "";

            if (cellId == userId) {
              updateSeat(columnName);
              updateRow(index + 1);
            }

            return (
              <div
                id={cellId}
                className={`h-[100px] bg-gray-950 flex flex-col gap-2 text-center justify-center items-center w-[100px] ${borderBlue} border border-gray-600 rounded-lg ${opacity}`}
              >
                <Avatar className="flex items-center justify-center h-[2rem] w-[2rem] border border-gray-700">
                  {getInitials(cell.name)}
                </Avatar>
                <span className="text-[10px]">{cell.name}</span>
              </div>
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
