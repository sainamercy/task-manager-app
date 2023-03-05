import React, { useEffect, useState } from "react";
import { useAuthContext } from "../providers/Auth.provider";
import axios from "axios";
import { API_URL } from "../constants";
import Search from "./Search";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTasks = async () => {
    axios
      .get(`${API_URL}/tasks`, {
        headers: {
          "X-User-ID": user?.id,
        },
      })
      .then((response) => {
        setTasks(response.data.data);
        navigate("/tasklist");
      })
      .catch((error) => {
        // TODO: handle error
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  // TODO:  Create todoItem component
  // TODO:  Handle Edit / Update Todo item
  // TODO:  Handle Delete Todo item
  // TODO:  Group Todo items per status - IN progress/todo/done etec
  // TODO: Create a view for all Todo Items and keep a state to swicth between grouped tasks view and all taska view

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center gap-2 text-gray-800 md:w-5/6">
      <div className="w-full text-center p-4 border-b border-gray-300 flex justify-between items-center">
        <h1 className="text-center">Task List for {user?.email} </h1>
        <Search />
      </div>

      <div className="w-full flex justify-between p-6 h-full">
        <div className="bg-red-50 h-full w-1/4 p-3 rounded-xl">
          <h2 className="bg-gray-900 text-gray-50 p-2 rounded-full w-32 text-center mb-2">To Do</h2>
          {tasks?.length > 0 && (
            <>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  due={task.due}
                  priority={task.priority}
                />
              ))}
            </>
          )}
        </div>
        <div className="bg-orange-50 h-full w-1/4 p-3 rounded-xl">
          <h2 className="bg-gray-900 text-gray-50 p-2 rounded-full w-32 text-center">In Progress</h2>
        </div>
        <div className="bg-green-50 h-full w-1/4 p-3 rounded-xl">
          <h2 className="bg-gray-900 text-gray-50 p-2 rounded-full w-32 text-center">Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
