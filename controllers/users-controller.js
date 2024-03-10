import ctrlWrapper from "../decorators/ctrlWrapper.js";
import { User } from "../models/index.js";

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({
    username,
    email,
    password,
  });

  res.status(201).json(newUser);
};

const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
};

export default {
  signUp: ctrlWrapper(signUp),
  getAllUsers: ctrlWrapper(getAllUsers),
};
