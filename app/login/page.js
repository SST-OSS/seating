"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/store/store";
import { useState } from "react";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBatchManager = useUser((state) => state.batchManagerLogin);

  const handleLogin = () => {
    if (email.length == 0 || password.length == 0) {
      alert("Please enter email and password");
      return;
    }

    console.log("Logging in", email, password);

    handleBatchManager("Dhruv", email, 1, 1, "img/logo.png");
  };
  return (
    <div className="text-white flex m-auto justify-center items-center h-screen">
      <div className="flex max-h-[50%] min-w-[400px] gap-4 max-w-[50%] flex-col">
        <input
          className="p-2 w-full  pl-4 border-[1px] border-white rounded-lg bg-transparent text-[18px]"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="p-2 w-full  pl-4 border-white border-[1px] rounded-lg bg-transparent text-[18px]"
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <Button className="border border-gray-700" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default page;
