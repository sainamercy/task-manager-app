import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";


function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center md:flex-row">
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tasklist" element={<TaskList />}/>
        <Route path="/newtask" element={<NewTask />}/>
        <Route path="/signin" element={<Signup />}/>
        </Routes>
    </div>
  );
}

export default App;
