import { React, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SweetAlert2 from "sweetalert2";

import { useAuth } from "../context/AuthContext";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singUp, isAuthenticated, registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      SweetAlert2.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please make sure your passwords match",
      });
      return;
    }

    singUp(data);
  };

  return (
    <div className="form-container bg-zinc-800 max-w-md mx-auto p-4 rounded-md shadow-md mt-8">
      <h1>Register Page</h1>

        {registerErrors && (
            <div className="bg-red-500 text-white p-2 rounded-md mt-4">
                {registerErrors?.message?.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
            </div>
        )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("email", { required: true })}
          />
            {errors.email && (
            <span className="text-red-500">This field is required</span>
            )}
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("password", { required: true })}
          />
            {errors.password && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>
        <div className="mt-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-gray-300 p-2 rounded-md w-full text-black"
            {...register("confirmPassword", { required: true })}
          />
            {errors.confirmPassword && (
                <span className="text-red-500">This field is required</span>
            )}
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
