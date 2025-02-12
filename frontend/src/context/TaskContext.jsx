import { createContext, useContext, useState, useEffect } from "react";

import { useTaskReducer } from "../reducers/taskReducer";

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
    setTask,
    clearTask,
    setTaskErrors,
    errors,
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
        setTask,
        clearTask,
        errors,
      }}
    >
      <div className="relative h-[400px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800">
        <div className="flex flex-col gap-4  w-full h-full md:px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Tasks Form
          </h1>
          {children}
        </div>
      </div>
    </TaskContext.Provider>
  );
};
