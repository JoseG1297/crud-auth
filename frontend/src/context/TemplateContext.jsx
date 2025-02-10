import React, { createContext, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

// Crear el contexto
const TemplateContext = createContext();

// Crear un proveedor de contexto
export const TemplateProvider = ({ children }) => {
  const { logoutReducer } = useAuth();

  return (
    <TemplateContext.Provider >
      <div className="flex flex-col h-screen">
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            onClick={() => logoutReducer()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </nav>
        <div className="flex flex-1">
          <div className="bg-gray-200 w-64 p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/tasks" className="text-gray-700 hover:text-gray-900">
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  to="/task-form"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Task Form
                </Link>
              </li>
              <li>
                <Link to="/users" className="text-gray-700 hover:text-gray-900">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/posts" className="text-gray-700 hover:text-gray-900">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 p-8">{children}</div>
        </div>
      </div>
    </TemplateContext.Provider>
  );
};