import React from "react";

function Home() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center gap-10 text-gray-800 text-2xl md:w-5/6">
      <h1 className="text-4xl mt-3">Plan <span className="text-orange-600">your day</span> one task <span className="block text-orange-600">at a time</span></h1>
        <img
          src="https://cdn.dribbble.com/users/6261056/screenshots/14660465/media/a608639b24d21d75eae965deb1a9f797.gif"
          alt="home-image"
          className="rounded-lg"
        />
        <p className="text-center">Gain a new level of control, clarity and focus throughout your day effortlessy</p>
        <button className="bg-gradient-to-b from-orange-600 to-orange-300 p-3 rounded-full w-40 hover:opacity-80">Get started</button>
      </div>
  );
}

export default Home;
