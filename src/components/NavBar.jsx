import React from "react";

function NavBar() {
  return (
    <nav className="w-full h-20 rounded-lg flex items-center bg-teal-900 text-white text-sm gap-6 md:text-lg md:h-full md:w-1/6 md:flex-col">
        <h1 className="mt-20 text-4xl text-orange-500">TaskMaster</h1>
      <ul className="flex flex-col gap-8">
        <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
          <a
            className=""
            href="#"
          >
            Home
          </a>
        </li>
        <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
          <a
            className=""
            href="#"
          >
            My tasks
          </a>
        </li>
        <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
          <a
            className=""
            href="#"
          >
            Create New Task
          </a>
        </li>
        <li className="hover:bg-gradient-to-b from-orange-600 to-orange-300 p-2 rounded-lg">
          <a
            className=""
            href="#"
          >
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
