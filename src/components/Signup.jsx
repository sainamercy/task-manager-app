import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-evenly relative text-gray-600 text-lg md:w-5/6">
      <form className="flex flex-col w-96 gap-6 bg-gray-400/50 p-6 rounded-xl shadow-xl z-50">
        <h3 className="text-3xl text-center text-orange-600 font-bold">
          Sign up to get sarted
        </h3>
        <label htmlFor="Email">
          Email:
          <input
            type="text"
            name="email"
            placeholder="eg. janedoe@gmail.com"
            className="w-full rounded-lg p-2"
          />
        </label>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            placeholder="eg. Jane Doe"
            className="w-full rounded-lg p-2"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            className="w-full rounded-lg p-2"
          />
        </label>
        <button className="bg-gradient-to-b from-orange-600 to-orange-300 p-3 rounded-full w-40 hover:opacity-80 m-auto">
          sign up
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="underline decoration-orange-500">
            sign in here
          </Link>
        </p>
      </form>
      <div className="w-1/2 absolute top-10 right-10">
        <img src="https://i.pinimg.com/originals/cf/6f/cf/cf6fcf14be2cd01dd4923b36445ca632.gif" />
      </div>
    </div>
  );
}

export default Signup;
