import React, { useState } from "react";
import { formatDateTime } from "../utilities/functions";

const TaskStatus = ({ currentValue, onChange }) => {
  const statusStyle = () => {
    if (currentValue === "CREATED") {
      return "bg-gray-500";
    } else if (currentValue === "ONGOING") {
      return "bg-orange-500";
    } else {
      return "bg-green-500";
    }
  };
  return (
    <div className="flex justify-center px-2">
      <div>
        <select
          className={`p-2 rounded-lg text-gray-100 ${statusStyle()}`}
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

  const priorityStyle = () => {
    if (priority === "LOW") {
      return "bg-gray-300";
    } else if (priority === "MEDIUM") {
      return "bg-orange-300";
    } else {
      return "bg-red-300";
    }
  };

  
  return (
    <div className="border border-gray-300 p-2 rounded-xl w-full bg-orange-50 flex flex-col gap-2 mb-4">
      <div className="flex justify-between">
        <h3 className="text-2xl underline decoration-gray-400">{title}</h3>
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
      <div className="flex justify-between items-center">
        <p className={`capitalize rounded-lg p-1 text-gray-100 ${priorityStyle()}`}>
          {priority.toLowerCase()}
        </p>
        <TaskStatus onChange={handleChange} currentValue={status} />
      </div>
      {taskDetails ? <div className="flex justify-end">
        <button
          className="bg-red-400 hover:opacity-50 text-gray-100 py-1 px-2 rounded-lg"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </div> : null}
    </div>
  );
}

export default TaskItem;
