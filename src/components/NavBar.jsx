import React from "react";

function NavBar() {
  return (
    <nav className="w-full h-20 flex items-center bg-teal-900 text-white md:h-full md:w-1/6 md:flex-col">
      <a className="" href="#">
        Home
      </a>
      <a className="" href="#">
        My tasks
      </a>
      <button className="bg-gradient-to-b from-orange-600 to-orange-300 p-3 rounded-full w-40 hover:opacity-80" href="#">
        Sign In
      </button>
    </nav>
  );
}

export default NavBar