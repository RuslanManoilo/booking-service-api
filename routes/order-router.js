import express from "express";
import orderControllers from "../controllers/order-controllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import validateBody from "../decorators/validateBody.js";
import { orderCreateSchema, orderUpdateSchema } from "../models/Order.js";

const orderRouter = express.Router();

orderRouter.get('/', orderControllers.getAllOrders);
orderRouter.get('/:id', orderControllers.getOrderById);
orderRouter.post('/:campID', isEmptyBody, validateBody(orderCreateSchema), orderControllers.createOrder);
orderRouter.put('/:id', isEmptyBody, validateBody(orderUpdateSchema), orderControllers.updateOrder);
orderRouter.delete('/:id', orderControllers.deleteOrder);

export default orderRouter;