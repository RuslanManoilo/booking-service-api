import { Sequelize } from "sequelize";
import UserModel from './User.js';

export const sequelize = new Sequelize("postgres", "postgres", "rootroot", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false, // Щоб включити логування SQL-запитів, встановити на true
});

// Підключення моделі User та передача об'єкта sequelize
const User = UserModel(sequelize);

// Створення таблиці в базі даних (якщо вона ще не існує)
User.sync();

// Експорт моделі для використання в інших файлових системах
export default User;