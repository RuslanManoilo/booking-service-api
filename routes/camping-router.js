import express from "express";
import campingControllers from "../controllers/camping-controllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import validateBody from "../decorators/validateBody.js";
import { campingCreateSchema, campingUpdateSchema } from "../models/Camping.js";

const campingRouter = express.Router();

campingRouter.get('/', campingControllers.getAllCampings);
campingRouter.get('/:id', campingControllers.getCampingById);
campingRouter.post('/', isEmptyBody, validateBody(campingCreateSchema), campingControllers.createCamping);
campingRouter.put('/:id', isEmptyBody, validateBody(campingUpdateSchema), campingControllers.updateCamping);
campingRouter.delete('/:id', campingControllers.deleteCamping);

export default campingRouter;