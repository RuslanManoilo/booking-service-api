import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../middlewares/HttpError.js";
import { Camping, Order } from "../models/index.js";

const createCamping = async (req, res) => {
  const { name, description, location, price } = req.body;

  const newCamping = await Camping.create({
    name,
    description,
    location,
    price,
  });

  res.status(201).json({
    camping: newCamping,
    message: "Camping created successfully.",
  });
};

const getAllCampings = async (req, res) => {
  const campings = await Camping.findAll();

  res.status(200).json(campings);
};

const getCampingById = async (req, res) => {
  const { id } = req.params;

  const camping = await Camping.findByPk(id);

  if (!camping) {
    throw HttpError(404, `Camping with id=${id} not found!`);
  }

  res.status(200).json({ camping });
};

const updateCamping = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, price, rating, favorite, status } =
    req.body;

  const camping = await Camping.findByPk(id);

  if (!camping) {
    throw HttpError(404, `Camping with id=${id} not found!`);
  }

  camping.name = name || camping.name;
  camping.description = description || camping.description;
  camping.location = location || camping.location;
  camping.price = price || camping.price;
  camping.rating = rating || camping.rating;
  camping.favorite = favorite || camping.favorite;
  camping.status = status || camping.status;

  await camping.save();

  res.status(200).json({
    camping,
    message: "Camping updated successfully.",
  });
};

const deleteCamping = async (req, res) => {
  const { id } = req.params;

  const camping = await Camping.findByPk(id);

  if (!camping) {
    throw HttpError(404, `Camping with id=${id} not found!`);
  }

  await Order.destroy({
    where: {
      campingID: id,
    },
  });

  await camping.destroy();

  res.status(204).json({ message: "Camping deleted successfully." });
};

export default {
  createCamping: ctrlWrapper(createCamping),
  getAllCampings: ctrlWrapper(getAllCampings),
  getCampingById: ctrlWrapper(getCampingById),
  updateCamping: ctrlWrapper(updateCamping),
  deleteCamping: ctrlWrapper(deleteCamping),
};
