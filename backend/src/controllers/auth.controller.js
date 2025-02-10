import bcrypt from "bcryptjs";

import User from "../models/user.model.js";

import { createToken } from "../libs/jwt.js";
import { httpStatus } from "../libs/staticData.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await User.findOne({
      email,
    });

    if (userFound) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: ["User already exists"] });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const user = await newUser.save();

    const token = await createToken({ id: user._id });

    const jsResult = {
      username: user.username,
      email: user.email,
      id: user._id,
      authToken: token,
    };

    return res.status(httpStatus.CREATED).json(jsResult);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: ["Error registering user"], error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: ["User not found"] });
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: ["Invalid password"] });
    }

    const token = await createToken({ id: user._id });

    const jsResult = {
      username: user.username,
      email: user.email,
      id: user._id,
      authToken: token,
    };

    return res.status(httpStatus.CREATED).json(jsResult);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: ["Error logging in"], error });
  }
};

export const logOut = async (req, res) => {
  try {
    return res
      .removeHeader("authToken")
      .status(httpStatus.OK)
      .json({ message: "User logged out" });
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: ["Error logging out"], error });
  }
};

export const profile = async (req, res) => {
  try {
    const userData = req.userData;

    const userFound = await User.findById(userData.id);

    if (!userFound) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: ["User not found"] });
    }

    return res.status(httpStatus.OK).json(userFound);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: ["Error profile"], error });
  }
};
