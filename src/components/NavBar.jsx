import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar({ isAuth }) {
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location.href = "/";
  };

  return (
    <nav className="w-full h-20 rounded-lg flex items-center bg-teal-900 text-white text-sm md:text-lg md:h-full md:w-1/6 md:flex-col">
      <h1 className="mt-20 text-4xl text-orange-600 font-bold">TaskMaster</h1>
      <ul className="flex flex-col gap-8 mt-6">
        <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
          <Link to="/" className="">
            <i className="fa-solid fa-house-chimney mr-2"></i>
            Home
          </Link>
        </li>
        {isAuth ? (
          <>
            <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
              <Link to="/tasklist" className="">
                <i className="fa-solid fa-list-check mr-2"></i>
                My tasks
              </Link>
            </li>
            <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
              <Link to="/newtask" className="">
                <i className="fa-solid fa-plus mr-2"></i>
                Create New Task
              </Link>
            </li>
            <li
              onClick={logOut}
              className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg"
            >
              <i className="fa-solid fa-left-to-bracket mr-2"></i>
              Log Out
            </li>
          </>
        ) : null}
        {!isAuth && (
          <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
            <Link to="/signin" className="">
              <i className="fa-solid fa-right-to-bracket mr-2"></i>
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
