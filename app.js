import express from "express";
import logger from "morgan";
import cors from "cors";

import userRouter from "./routes/user-router.js";
import campingRouter from "./routes/camping-router.js";
import orderRouter from "./routes/order-router.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/campings', campingRouter);
app.use('/api/orders', orderRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
