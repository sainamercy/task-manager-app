import React from "react";
import TaskItem from "./TaskItem";

const TaskGroup = ({ tasks, handleTaskStateChange, handleDelete }) => {
  return (
    <div className="p-2">
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
              id={task.id}
              handleTaskStateChange={handleTaskStateChange}
              handleDelete={handleDelete}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskGroup;
