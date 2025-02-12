import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";
import { useTaskContext } from "../context/TaskContext";

export const TasksPage = () => {
  const navigate = useNavigate();

  const { getTasks, deleteTask, setCurrentTask, taskList } = useTaskContext();

  useEffect(() => {
    handleReloadTasks();
  }, []);

  const handleReloadTasks = () => {
    getTasks();
  };

  const handleAddTask = () => {
    navigate("/tasks/new");
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    navigate(`/tasks/edit/${task._id}`);
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    getTasks();
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full mb-10 ">
      <h2 className="text-gray-300 ">Lista de tareas generadas</h2>
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
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">
                Title
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">
                Description task
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">
                Created Date
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">
                Updated Date
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {taskList ? (
              taskList?.map((task) => (
                <tr key={task?._id}>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {task?.title}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 truncate">
                    {task?.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {moment(task?.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {moment(task?.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <button
                      onClick={() => handleEditTask(task)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(task._id)}
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
