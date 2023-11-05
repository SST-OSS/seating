"use client";
import { useUser } from "@/lib/store/store";
import Header from "@/components/common/Header";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/components/SeatingList";
import Table from "@/components/common/Table";
import { Button } from "@/components/ui/button";
import SelectUser from "@/components/common/SelectUser";

const Home = () => {
  const [seatingArrangment, setSeatingArrangment] = useState([]);

  const id = useUser((state) => state.id);
  const seatedCol = useUser((state) => state.seatedCol);
  const seatedRow = useUser((state) => state.seatedRow);
  const batch = useUser((state) => state.batchNumber);

  const isBatchManager = useUser((state) => state.isBatchManager);

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
      console.log(result, "result");
      setSeatingArrangment(result);
    }
  };

  const name = useUser((state) => state.name);
  // const batchManagerName = useUser((state) => state.name);

  if (name == null) {
    redirect("/");
  }

  function scrollToCell(cellId) {
    const cellElement = document.getElementById(cellId);

    if (cellElement) {
      cellElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const subject = ["Maths", "Java", "CLI"];
  return (
    <div className=" bg-gradient-to-b from-gray-700 via-gray-900 to-black h-screen overflow-hidden text-gray-200 max-h-screen w-screen p-4 flex flex-col gap-4 ">
      <Header text={"Home"} />

      {isBatchManager ? (
        <>
          <div className="mt-[80px]  border p-4 rounded-lg">
            <div className="flex justify-between w-full">
              <div className="flex items-start gap-2">
                <Avatar className="border-[3px] h-[4rem] w-[4rem] border-blue-700">
                  <AvatarImage src="img/logo.png" alt="@shadcn" />
                  <AvatarFallback>SST</AvatarFallback>
                </Avatar>
                <span className="capitalize text-xl font-medium">{name}</span>
              </div>
              <div className="text-lg bg-blue-900 font-bold  p-2 flex items-center h-auto rounded-lg">
                <span>Thursday</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[1.25rem]">Today's Class</span>
              <div className="flex pt-2 gap-4">
                {subject.map((item) => (
                  <div key={item} className="p-2 pl-4 pr-4 bg-black  rounded">
                    <span>{item}: 34/200 </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 flex-col mt-4">
              <span>Mark Attendence</span>
              <div>
                <Button>Select Multiple</Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="border lg:w-[50%] lg:min-h-[180px] flex flex-col items-start  p-4 mt-[80px] border-gray-600 rounded-lg overflow-hidden w-full">
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
            {batch == 3 ? "Akanksha Gaur" : ""}
          </span>
        </div>
      )}

      <Table table={seatingArrangment} />

      {/* <div className="absolute flex items-center justify-between p-2 pl-8 pr-8 gap-4 left-0 right-0 bottom-0 h-[80px] bg-blue-700">
        <div className="flex gap-4">
          <span className="text-xl">10 Selected</span>{" "}
          {subject.map((item) => (
            <div
              key={item}
              className="p-2 pl-4 min-w-[100px] justify-center flex items-center pr-4 bg-black  rounded"
            >
              <span>{item} </span>
            </div>
          ))}
        </div>
        <Button>Done</Button>
      </div> */}
    </div>
  );
};

export default Home;
