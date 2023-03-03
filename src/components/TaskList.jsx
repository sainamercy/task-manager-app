import React, { useEffect, useState } from "react";
import { useAuthContext } from "../providers/Auth.provider";
import axios from "axios";
import { API_URL } from "../constants";

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
    <div className="w-full h-full bg-gray-100 flex flex-col items-center gap-10 text-gray-800 text-2xl md:w-5/6">
      <h1 className="cursor-pointer">Task List for {user?.email} </h1>


      {tasks?.length >  0 && (
        <>
        {tasks.map((task) => (
          <div key={task.id} className="flex flex-col items-center gap-10">
            
            <h3> 
            {task.title}
            </h3>
            <p>
              {task.description}
            </p>

          </div>

        ))}
      </>
      )}



    </div>
  );
};

export default TaskList;
