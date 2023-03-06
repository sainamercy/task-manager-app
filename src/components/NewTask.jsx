import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../constants";
import { useAuthContext } from "../providers/Auth.provider";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api/tasks";

const TextInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col justify-center">
      <label htmlFor="email">
        {label}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg p-4"
        />
      </label>
    </div>
  );
};

const Priority = ({ currentValue, setPriority }) => {
  let priorities = [
    {
      id: 0,
      name: "LOW",
    },
    {
      id: 1,
      name: "MEDIUM",
    },
    {
      id: 2,
      name: "HIGH",
    },
  ];

  return (
    <div className="py-5 flex flex-col gap-4">
      <p>Select Priority</p>

      {priorities.map(({ id, name }) => (
        <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" key={id}>
          <input
            class="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            type="radio"
            name={"priority"}
            id={name}
            value={id}
            checked={currentValue === id}
            onChange={() => setPriority(id)}
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer capitalize"
            htmlFor={name}
          >
            {name.toLowerCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [due, setDueDate] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      description,
      priority,
      due,
      user_id: user?.id,
    };

    setIsLoading(true);

    createTask(requestBody)
      .then(() => {
        // setIsLoading(false);
        navigate("/tasklist");
      })
      .catch(() => {
        // TODO:  handle error
      })
      .finally(() => {
        setIsLoading(false);
      });

    // clear previous entries
    setTitle("");
    setDescription("");
    setPriority(0);
    setDueDate("");
  };

  // TODO:  handle request loading
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center flex-col gap-10  md:w-5/6 bg-[url('https://media.istockphoto.com/id/1341538285/photo/being-organased-saves-tame.jpg?b=1&s=170667a&w=0&k=20&c=vWcvUzJczooUH5Gul4TW-cTLzIW862y6Q5hI2ImJRhk=')] bg-cover bg-no-repeat">
      <form
        onSubmit={handleSubmit}
        className="w-96 md:w-1/2 m-4 gap-6 bg-gray-500/80 p-6 rounded-lg shadow-xl"
      >
        <div className="flex flex-col justify-center">
          <TextInput
            placeholder="What would you like to do?"
            label={"Task Name"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="title" className="py-2 ">
            A short Description
          </label>
          <textarea
            placeholder="What would you like to do?"
            className="p-4 border-blue-300 focus:border-blue-500 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="title" className="py-2 ">
            Due Date
          </label>
          <input
            type="datetime-local"
            className="p-4 border-blue-300 focus:border-blue-500 rounded-lg"
            value={due}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <Priority
            currentValue={priority}
            setPriority={(value) => setPriority(value)}
          />

          <button
            className="bg-gradient-to-b from-orange-600 to-orange-300 p-4 rounded-full w-40 hover:opacity-80 m-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTask;
