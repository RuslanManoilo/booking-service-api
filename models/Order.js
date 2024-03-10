import { DataTypes } from "sequelize";
import { Camping } from "../models/index.js";
import Joi from "joi";

export default (sequelize) => {
  const Order = sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numberOfPeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false });

  Order.belongsTo(Camping, { as: "camping", foreignKey: "campingID" });

  return Order;
};


// Schemas
export const orderCreateSchema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  numberOfPeople: Joi.number().integer().min(1).required(),
});

export const orderUpdateSchema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  numberOfPeople: Joi.number().integer().min(1),
});