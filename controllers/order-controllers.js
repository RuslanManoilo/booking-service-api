import ctrlWrapper from "../decorators/ctrlWrapper.js";
import { HttpError } from "../middlewares/index.js";
import { Order, Camping } from "../models/index.js";

const createOrder = async (req, res) => {
  const { campID } = req.params;
  const { startDate, endDate, numberOfPeople } = req.body;

  const camping = await Camping.findByPk(campID);

  if (!camping) {
    throw HttpError(404, `Camping with id=${campID} not found!`);
  }

  const order = await Order.create({
    startDate,
    endDate,
    numberOfPeople,
    campingID: camping.id,
  });

  res.status(201).json({
    order,
    message: "Order created successfully.",
  });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();

  res.status(200).json({ orders });
};

const getOrderById = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findByPk(id);

  if (!order) {
    throw HttpError(404, `Order with id=${id} not found!`);
  }

  res.status(200).json({ order });
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { startDate, endDate, numberOfPeople } = req.body;

  const order = await Order.findByPk(id);

  if (!order) {
    throw HttpError(404, `Order with id=${id} not found!`);
  }

  order.startDate = startDate || order.startDate;
  order.endDate = endDate || order.endDate;
  order.numberOfPeople = numberOfPeople || order.numberOfPeople;

  await order.save();

  res.status(200).json({
    order,
    message: "Order updated successfully.",
  });
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);

  const order = await Order.findByPk(id);

  if (!order) {
    throw HttpError(404, `Order with id=${id} not found!`);
  }

  await order.destroy();

  res.status(204).json({ message: "Order deleted successfully." });
};

export default {
  createOrder: ctrlWrapper(createOrder),
  getAllOrders: ctrlWrapper(getAllOrders),
  getOrderById: ctrlWrapper(getOrderById),
  updateOrder: ctrlWrapper(updateOrder),
  deleteOrder: ctrlWrapper(deleteOrder),
};
