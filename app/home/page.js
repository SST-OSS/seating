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

  const batch1 = `Aarya Harshal Patil	aarya.23bcs10170@ms.sst.scaler.com
  Aayush Khopade	aayush.23bcs10050@ms.sst.scaler.com
  Abhay Raj	abhay.23bcs10181@ms.sst.scaler.com
  Aditya Kumar Singh	adityakumar.23bcs10152@ms.sst.scaler.com
  Aman singh	aman.23bcs10164@ms.sst.scaler.com
  Anant Shukla	anant.23bcs10217@ms.sst.scaler.com
  ANANYA SRIVASTAVA	ananya.23bcs10195@ms.sst.scaler.com
  Aniruddha patil	aniruddha.23bcs10156@ms.sst.scaler.com
  Ankur Kalita	ankur.23bcs10185@ms.sst.scaler.com
  Arpit Srivastava	arpit.23bcs10194@ms.sst.scaler.com
  Aryan Choudhary	aryan.23bcs10080@ms.sst.scaler.com
  Ashwin Saklecha	ashwin.23bcs10212@ms.sst.scaler.com
  Ayush Saxena	ayush.23bcs10175@ms.sst.scaler.com
  Charanjeet	charanjeet.23bcs10074@ms.sst.scaler.com
  Debashis Maharana	debashis.23bcs10209@ms.sst.scaler.com
  Devi Charan	chitluri.23bcs10211@ms.sst.scaler.com
  Garvit Dadheech	garvit.23bcs10203@ms.sst.scaler.com
  Gowtham	gowtham.23bcs10168@ms.sst.scaler.com
  Harsh	harsh.23bcs10171@ms.sst.scaler.com
  Harsh Verma	harsh.23bcs10183@ms.sst.scaler.com
  harshit sachan	harshit.23bcs10134@ms.sst.scaler.com
  Himanshu Sainani	himanshu.23bcs10126@ms.sst.scaler.com
  INDRAJEET YADAV	indrajeet.23bcs10199@ms.sst.scaler.com
  Ishita Khot	ishita.23bcs10188@ms.sst.scaler.com
  Jash Savaliya	jash.23bcs10163@ms.sst.scaler.com
  Kanan Arora	kanan.23bcs10180@ms.sst.scaler.com
  Kushagra S	kushagra.23bcs10165@ms.sst.scaler.com
  Manan Agrawal	manan.23bcs10206@ms.sst.scaler.com
  Manjari Rathore	manjari.23bcs10192@ms.sst.scaler.com
  Mayank Vashisht	mayank.23bcs10177@ms.sst.scaler.com
  NAITIK JAIN	naitik.23bcs10214@ms.sst.scaler.com
  Navneet	navneet.23bcs10136@ms.sst.scaler.com
  om Annasaheb waghchavare	annasaheb.23bcs10142@ms.sst.scaler.com
  Om Mishra	om.23bcs10191@ms.sst.scaler.com
  Paawanjot Kaur	paawanjot.23bcs10186@ms.sst.scaler.com
  Paramjeet Kaur Matharu	paramjeet.23bcs10189@ms.sst.scaler.com
  Pradyut Fogla	pradyut.23bcs10193@ms.sst.scaler.com
  Purab Ray	purab.23bcs10196@ms.sst.scaler.com
  Purvansh Sahu	purvansh.23bcs10169@ms.sst.scaler.com
  Riya Bhurse	riya.23bcs10187@ms.sst.scaler.com
  Rushabh Mistry	rushabh.23bcs10197@ms.sst.scaler.com
  Rushil Choudhary	rushil.23bcs10178@ms.sst.scaler.com
  Sarthak Pandey	sarthak.23bcs10179@ms.sst.scaler.com
  Satyam	satyam.23bcs10198@ms.sst.scaler.com
  Sheza mishal	sheza.23bcs10184@ms.sst.scaler.com
  Shivam Singh	shivam.23bcs10162@ms.sst.scaler.com
  Shivam Tiwari	shivam.23bcs10104@ms.sst.scaler.com
  Shubh	shubh.23bcs10190@ms.sst.scaler.com
  Siddharth Baleja	siddharth.23bcs10161@ms.sst.scaler.com
  Spoorthy	spoorthy.23bcs10144@ms.sst.scaler.com
  Suryansh Dubey	suryansh.23bcs10167@ms.sst.scaler.com
  Suswetha	suswetha.23bcs10166@ms.sst.scaler.com
  Syed Ayaan Ali	syed.23bcs10094@ms.sst.scaler.com
  Syeda noorain	syeda.23bcs10221@ms.sst.scaler.com
  tanvi	tanvi.23bcs10143@ms.sst.scaler.com
  Tejas Ghatule	tejas.23bcs10056@ms.sst.scaler.com
  Vinay Kumar Chopra	vinay.23bcs10174@ms.sst.scaler.com
  Vivek	vivek.23bcs10172@ms.sst.scaler.com
  Yash Arya	yash.23bcs10160@ms.sst.scaler.com
  Yash athwani	yash.23bcs10173@ms.sst.scaler.com`;

  function convertTextToObjects(text) {
    const lines = text.split("\n");
    const result = [];

    for (const line of lines) {
      const [name, email] = line.split("\t");
      result.push({ name, email, batchNumber: 4 });
    }

    return result;
  }

  const listOfObjects = convertTextToObjects(batch1);
  console.log(listOfObjects, "this is batch 4 data");

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

      <div className="absolute flex items-center justify-between p-2 pl-8 pr-8 gap-4 left-0 right-0 bottom-0 h-[80px] bg-blue-700">
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
      </div>
    </div>
  );
};

export default Home;
