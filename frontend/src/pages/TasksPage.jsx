import { React, useState, useEffect } from "react";
import { useTaskContext } from "../context/TaskContext";
import { useNavigate, Link } from "react-router-dom";

export const TasksPage = () => {
  const navigate = useNavigate();

  const { getTasks, deleteTask, setTask, tasks } = useTaskContext();

  useEffect(() => {
    handleReloadTasks();
  }, []);

  const handleReloadTasks = () => {
    getTasks();
  };

  const handleAddTask = () => {
    navigate("/tasks/new");
  };

  const handleEditTask = () => {};

  const handleDeleteTask = () => {};

  return (
    <div className="flex flex-col gap-4 w-full h-full ">
      <p className="text-gray-300 marg">Lista de tareas generadas</p>
      <div className="flex justify-between items-center">
        <button
          onClick={handleReloadTasks}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reload Tasks
        </button>
        <button
          onClick={handleAddTask}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Title
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Description task
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Created Date
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks?.length > 0 ? (
              tasks?.map((task) => (
                <tr key={task.id}>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {task?.tittle}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 truncate">
                    {task?.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {task?.createdDate}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <button
                      onClick={() => setTask(task)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white">
                <td
                  className="py-4 px-6 border-b border-black-200 text-black "
                  colSpan={4}
                >
                  <p className="text-center">No hay tareas registradas</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
