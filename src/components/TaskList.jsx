import React, { useContext } from "react";
import { useAuthContext } from "../providers/Auth.provider";

const TaskList = () => {
  const auth = useAuthContext();

  console.log(auth);

  const logOut = () => {
    localStorage.removeItem("user");
  };

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center gap-10 text-gray-800 text-2xl md:w-5/6">
      <h1 onClick={logOut} className="cursor-pointer">
        Task List for {auth?.user?.email}{" "}
      </h1>
    </div>
  );
};

export default TaskList;
