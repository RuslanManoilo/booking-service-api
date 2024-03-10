import { Sequelize } from "sequelize";
import UserModel from './User.js';
import CampingModel from './Camping.js'
import OrderModel from './Order.js'

export const sequelize = new Sequelize("postgres", "postgres", "rootroot", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false, // Щоб включити логування SQL-запитів, встановити на true
});

// Підключення моделі та передача об'єкта sequelize
const User = UserModel(sequelize);
const Camping = CampingModel(sequelize);
const Order = OrderModel(sequelize);

// Створення таблиці в базі даних (якщо вона ще не існує)
User.sync();
Camping.sync();
Order.sync();

export { User, Camping, Order };