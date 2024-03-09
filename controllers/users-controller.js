import ctrlWrapper from "../decorators/ctrlWrapper.js";
import User from "../models/index.js";

const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
};

export default {
  getAllUsers: ctrlWrapper(getAllUsers),
};
