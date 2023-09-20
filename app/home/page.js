"use client";
import { useUser } from "@/lib/store/store";
import Header from "@/components/common/Header";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "@/lib/components/SeatingList";
import Table from "@/components/common/Table";

const Home = () => {
  const [seatingArrangment, setSeatingArrangment] = useState([]);

  const id = useUser((state) => state.id);
  const seatedCol = useUser((state) => state.seatedCol);
  const seatedRow = useUser((state) => state.seatedRow);
  const batch = useUser((state) => state.batchNumber);

  useEffect(() => {
    getSeating();
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const getSeating = async () => {
    const result = await fetchData();

    if (result == "Error") {
      getSeating();
    } else {
      setSeatingArrangment(result);
    }
  };

  const name = useUser((state) => state.name);

  if (name == null) {
    redirect("/");
  }

  function scrollToCell(cellId) {
    const cellElement = document.getElementById(cellId);

    if (cellElement) {
      cellElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="bg-darkBG h-screen overflow-hidden text-gray-200 max-h-screen w-screen p-4 flex flex-col gap-4 ">
      <Header text={"Home"} />

      <div className="border flex flex-col items-start  p-4 mt-[80px] border-gray-600 rounded-lg overflow-hidden w-full">
        <div className="flex justify-between w-full">
          <Avatar className="border-[3px] h-[4rem] w-[4rem] border-blue-700">
            <AvatarImage src="img/logo.png" alt="@shadcn" />
            <AvatarFallback>SST</AvatarFallback>
          </Avatar>
          <div className="text-3xl bg-blue-900 font-bold  p-4 rounded-lg">
            <span>
              {seatedCol}-{seatedRow}
            </span>
          </div>
        </div>

        <span className="capitalize text-xl font-medium">{name}</span>
        <span className="capitalize">Batch :- {batch}</span>
        <span className="capitalize text-[12px]">
          Mentor :- {batch == 1 ? "Dhruv Pasricha" : ""}
          {batch == 2 ? "Diwakar Gupta" : ""}
          {batch == 3 ? "Parthvik Ajmera" : ""}
        </span>
      </div>

      <Table table={seatingArrangment} />
    </div>
  );
};

export default Home;
