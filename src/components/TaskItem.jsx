import React from "react";

function TaskItem({title, description, due, status, priority}){
    return(
        <div className="border border-gray-300 p-2 rounded-xl w-full bg-orange-50 flex flex-col gap-2 mb-4">
            <h3 className="text-2xl underline decoration-orange-400">{title}</h3>
            <p>{description}</p>
            <div className="flex justify-between">
            <p>Due: {due}</p>
            <p className="capitalize">{status.toLowerCase()}</p>
            <p className="capitalize">{priority.toLowerCase()}</p>
            </div>
        </div>
    )
}

export default TaskItem;