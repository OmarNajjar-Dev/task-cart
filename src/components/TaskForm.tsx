import { Plus } from "lucide-react";
import { useState } from "react";

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const disabled = !(taskTitle.trim() && taskDescription.trim());

  return (
    <form className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col gap-2">
        <label htmlFor="task-title" className="font-medium text-gray-900">
          Task Title
        </label>
        <input
          type="text"
          id="task-title"
          onChange={(e) => {
            setTaskTitle(e.target.value);
          }}
          value={taskTitle}
          className="p-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
          placeholder="Enter task title"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="task-description" className="font-medium text-gray-900">
          Task Description
        </label>
        <textarea
          id="task-description"
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          value={taskDescription}
          className="p-2 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 foucs:ring-offset-white max-h-40 min-h-15"
          placeholder="Enter task description"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={disabled}
          className="flex items-center justify-center gap-2 text-white bg-indigo-500 hover:not-disabled:bg-indigo-600 active:not-disabled:bg-indigo-700 transition-colors duration-200 border border-transparent rounded-md py-2 px-4 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
