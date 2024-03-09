import app from "./app.js";
import { sequelize } from "./models/index.js";

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully...");

    app.listen(8888, () => {
      console.log("Server running. Use our API on port: 8888");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  });
