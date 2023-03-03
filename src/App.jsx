import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import Signup from "./components/Signup";
import AuthProvider from "./providers/Auth.provider";

const SecureRoute = (Component) => {
  return (
    <AuthProvider>
      <NavBar isAuth={true} />
      <Component />
    </AuthProvider>
  );
};

const BaseRoute = (Component) => {
  return (
    <>
      <NavBar isAuth={false} />
      <Component />
    </>
  );
};

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center md:flex-row">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasklist" element={SecureRoute(TaskList)} />
        <Route path="/newtask" element={SecureRoute(NewTask)} />
        <Route path="/signin" element={BaseRoute(Login)} />
        <Route path="/signup" element={BaseRoute(Signup)} />
      </Routes>
    </div>
  );
}

export default App;
