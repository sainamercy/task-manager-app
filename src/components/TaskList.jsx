import React, { useEffect, useState } from "react";
import { useAuthContext } from "../providers/Auth.provider";
import Search from "./Search";
import { deleteTask, getAllTasks, updateTaskStatus } from "../api/tasks";
import TaskGroup from "./TaskGroup";
import { formatDate } from "../utilities/functions";

const TaskList = () => {
  const { user } = useAuthContext();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchDate, setSearchDate] = useState(formatDate(new Date()));
  const [allTasks, setAllTasks] = useState([]);

  const handleSearch = (newValue) => {
    setSearchValue(newValue);
  };

  const searchResults = allTasks.filter((task) =>
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filterByStatus = (status) =>
    searchValue.length > 0
      ? searchResults.filter((task) => task.status === status)
      : tasks.filter((task) => task.status === status);

  const filterByDate = (date) => {
    const filtered = allTasks.filter((task) => {
      return formatDate(task.due) === formatDate(date);
    });
    setTasks(filtered);
  };

  const tasksInTodo = filterByStatus("CREATED");
  const tasksInProgress = filterByStatus("ONGOING");
  const tasksDone = filterByStatus("COMPLETED");

  const getTasks = async () => {
    getAllTasks(user?.id)
      .then((response) => {
        setTasks(response.data.data);
        setAllTasks(response.data.data);
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

  const handleTaskStateChange = (taskId, newStatus) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      updateTaskStatus(taskToUpdate.id, newStatus).then((updated) => {
        if (updated.data.message === "SUCCESS") {
          const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, status: newStatus };
            }
            return task;
          });
          setTasks(newTasks);
        }
      });
    } catch (error) {
      // TODO:  handle error
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    deleteTask(id)
      .then(() => {
        setTasks((tasks) => tasks.filter((t) => t.id !== id));
      })
      .catch(() => {
        // TODO: handle error
      });
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center gap-2 text-gray-800 md:w-5/6">
      <div className="w-full text-center p-4 border-b border-gray-300 flex justify-between items-center">
        <h1 className="text-center text-2xl font-bold">Task List</h1>

        <div className="flex items-center gap-6">
          <Search
            currentValue={searchValue}
            handleClick={handleSearch}
            onChange={(v) => {
              setSearchValue(v);
            }}
          />
          <p>
            <i className="fa-solid fa-user mr-2"></i>
            {user?.full_name}
          </p>
        </div>
      </div>
      <div className="flex right-5">
        <input
          type={"date"}
          value={searchDate}
          onChange={(e) => {
            setSearchDate(e.target.value);
            console.log(searchDate);
          }}
          className="bg-gray-100 border border-gray-300 p-2 w-56 rounded-l-md"
          placeholder="Search by date"
        />
        <button
          className="bg-gray-600 hover:opacity-50 text-white font-bold p-2"
          onClick={() => filterByDate(searchDate)}
        >
          Filter By Date
        </button>
        <button
          className="bg-orange-500 hover:opacity-50 text-white font-bold p-2 rounded-r-md"
          onClick={() => setTasks(allTasks)}
        >
          Reset
        </button>
      </div>
      <div className="w-full flex justify-between p-6 h-full">
        <div className="bg-red-50 h-full w-1/3 p-3 rounded-xl">
          <h2 className="bg-gray-900 text-gray-50 p-2 rounded-full w-32 text-center mb-2">
            To Do
          </h2>
          <TaskGroup
            handleTaskStateChange={handleTaskStateChange}
            handleDelete={handleDelete}
            tasks={tasksInTodo}
          />
        </div>
        <div className="bg-orange-50 h-full w-1/3 p-3 rounded-xl">
          <h2 className="bg-gray-900 text-gray-50 p-2 rounded-full w-32 text-center mb-2">
            In Progress
          </h2>
          <TaskGroup
            handleTaskStateChange={handleTaskStateChange}
            handleDelete={handleDelete}
            tasks={tasksInProgress}
          />
        </div>
        <div className="bg-green-50 h-full w-1/3 p-3 rounded-xl mr-3">
          <h2 className="bg-gray-900 text-gray-50 p-2 rounded-full w-32 text-center mb-2">
            Completed
          </h2>
          <TaskGroup
            handleTaskStateChange={handleTaskStateChange}
            handleDelete={handleDelete}
            tasks={tasksDone}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
