import { createContext, useContext, useState, useEffect } from "react";

import { useTaskReducer } from "../reducers/taskReducer";
import { current } from "@reduxjs/toolkit";

export const TaskContext = createContext();

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within an TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    setTaskReducer,
    clearTaskReducer,
    setTaskErrors,
    errors,
    tasks,
    task
  } = useTaskReducer();

  useEffect(() => {
    if (errors) {
      console.log("textErrors", errors);
      const timer = setTimeout(() => {
        setTaskErrors(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <TaskContext.Provider
      value={{
        getTasks,
        createTask,
        updateTask,
        deleteTask,
        setCurrentTask: setTaskReducer,
        clearTask: clearTaskReducer,
        errors,
        taskList: tasks,
        currentTask: task
      }}
    >
      <div className="bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4  w-full h-full md:px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-4 text-center">
            Tasks Form
          </h1>
          {children}
        </div>
      </div>
    </TaskContext.Provider>
  );
};
