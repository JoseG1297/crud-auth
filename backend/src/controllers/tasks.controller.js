import Task from "../models/task.model.js";

import { httpStatus } from "../libs/staticData.js";

export const getTasks = async (req, res) => {
  try {
    const userId = req.userData.id;

    const tasks = await Task.find({ user: userId }).populate("user");

    if (!tasks) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Tasks not found" });
    }

    return res.status(httpStatus.OK).json(tasks);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error registering user", error });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const taskFound = await Task.findById(taskId);

    if (!taskFound) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "Task not found" });
    }

    return res.status(httpStatus.OK).json(taskFound);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error registering task", error });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const userId = req.userData.id;

    const newTask = new Task({
      title,
      description,
      user: userId,
    });

    const taskCreated = await newTask.save();

    return res.status(httpStatus.CREATED).json(taskCreated);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error registering task", error });
  }
};

export const updateTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const taskId = req.params.id;
    const taskUpdated = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });
    return res.status(httpStatus.CREATED).json(taskUpdated);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error update user task", error: error });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const taskDeleted = await Task.findByIdAndDelete(taskId, req.body);
    return res.status(httpStatus.CREATED).json(taskDeleted);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Error delete task", error });
  }
};
