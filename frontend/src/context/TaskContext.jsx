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

  const { getTasks, createTask, updateTask, deleteTask, setTask, clearTask, setTaskErrors, errors } = useTaskReducer();


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
      {children}
    </TaskContext.Provider>
  );
};
