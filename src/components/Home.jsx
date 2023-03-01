import React from "react";

function Home() {
  return (
    <div className="w-full h-full bg-gray-100 flex flex-col items-center gap-10 text-gray-800 text-2xl md:w-5/6">
      <h1 className="text-4xl mt-3"><span className="text-orange-600">Master</span> your tasks, <span className="text-orange-600">Conquer</span> your day with <span className="text-orange-600">TaskMaster</span></h1>
        <img
          src="https://cdn.dribbble.com/users/6261056/screenshots/14660465/media/a608639b24d21d75eae965deb1a9f797.gif"
          alt="home-image"
          className="rounded-lg"
        />
        <p className="text-center">TaskMaster is a powerful and user-friendly app designed to help you stay on top of your tasks and increase your productivity. With its intuitive interface, you can easily create and organize tasks, set due dates and reminders, and track your progress.</p>
        <button className="bg-gradient-to-b from-orange-600 to-orange-300 p-3 rounded-full w-40 hover:opacity-80">Get started</button>
      </div>
  );
}

export default Home;
