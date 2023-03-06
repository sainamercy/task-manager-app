import React, { useState } from "react";
import { formatDateTime } from "../utilities/functions";

const TaskStatus = ({ currentValue, onChange }) => {
  return (
    <div className="flex justify-center px-2">
      <div className="mb-3">
        <select
          className="p-1 rounded-lg"
          defaultValue={currentValue}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          <option value="CREATED">To Do</option>
          <option value="ONGOING">In Progress</option>
          <option value="COMPLETED">Complete</option>
        </select>
      </div>
    </div>
  );
};

function TaskItem({
  title,
  description,
  due,
  status,
  id,
  handleTaskStateChange,
  handleDelete,
  priority,
}) {
  const handleChange = (newValue) => {
    handleTaskStateChange(id, newValue);
  };
  const [taskDetails, setTaskDetails] = useState(false);

  const handleTaskDetails = () => {
    setTaskDetails(!taskDetails);
  };

  return (
    <div className="border border-gray-300 p-2 rounded-xl w-full bg-orange-50 flex flex-col gap-2 mb-4">
      <div className="flex justify-between">
        <h3 className="text-2xl underline decoration-orange-400">{title}</h3>
        {!taskDetails ? (
          <i
            onClick={handleTaskDetails}
            className="fa-sharp fa-solid fa-chevron-down mr-3"
          ></i>
        ) : (
          <i
            onClick={handleTaskDetails}
            className="fa-sharp fa-solid fa-chevron-up mr-3"
          ></i>
        )}
      </div>
      {taskDetails ? <p>{description}</p> : null}
      <p>Due: {formatDateTime(due)}</p>
      <div className="flex justify-between">
        <p className="capitalize">{priority.toLowerCase()}</p>
        <TaskStatus onChange={handleChange} currentValue={status} />
      </div>
      <div>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded-lg"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
