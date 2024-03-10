import { DataTypes } from "sequelize";
import Joi from "joi";

const campingStatus = {
  AVAILABLE: "available",
  BOOKED: "booked",
  UNAVAILABLE: "unavailable",
};

export default (sequelize) => {
  const Camping = sequelize.define(
    "camping",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      maxPeople: {
        type: DataTypes.INTEGER,
        defaultValue: 32,
        validate: {
          max: 32,
        },
      },
      status: {
        type: DataTypes.ENUM(Object.values(campingStatus)),
        defaultValue: campingStatus.AVAILABLE,
      },
      version: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );

  return Camping;
};

// Schemas
export const campingCreateSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  location: Joi.string().required(),
  price: Joi.number().required(),
});

export const campingUpdateSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  location: Joi.string(),
  price: Joi.number(),
  rating: Joi.number(),
  favorite: Joi.boolean(),
  status: Joi.string().valid(...Object.values(campingStatus)),
});
