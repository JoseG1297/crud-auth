import React from "react";
import { useForm } from "react-hook-form";
import SweetAlert2 from "sweetalert2";

import { registerService } from "../api/auth.js";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      SweetAlert2.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure your passwords match",
      });
      return;
    }

    let res = registerService(data.username, data.email, data.password);
    console.log(res);
  };

  return (
    <div className="form-container bg-zinc-800 max-w-md mx-auto p-4 rounded-md shadow-md mt-8">
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("username", { required: true })}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("password", { required: true })}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("confirmPassword", { required: true })}
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-zinc-500 text-white p-2 rounded-md w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
