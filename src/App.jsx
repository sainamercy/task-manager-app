import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center md:flex-row">
        <NavBar />
      <Home />
    </div>
  );
}

export default App;
