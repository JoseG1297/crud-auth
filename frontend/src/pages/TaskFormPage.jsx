import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const TaskFormPage = () => {
  const { createTask, updateTask, currentTask, errors } = useTaskContext();
  const navigate = useNavigate();
  const [task, setTask] = useState(
    currentTask || { title: "", description: "" }
  );

  const hangleReturn = () => {
    navigate("/tasks");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task?.id) {
      updateTask(task);
    } else {
      createTask(task);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full mb-10 ">
      <h2 className="text-gray-300 ">
        {task.id ? "Edit Task" : "Create a new Task"}
      </h2>
      <div className="flex justify-between items-center">
        <button
          onClick={hangleReturn}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Return List Tasks
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white p-8 rounded-lg shadow-lg"
      >
        {errors && (
          <div className="bg-red-500 text-white p-2 rounded-md mb-4">
            {errors?.message?.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={task.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={task.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            {task.id ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};
