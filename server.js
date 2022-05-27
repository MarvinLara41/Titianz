import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const PORT = process.env.PORT || 8050;
const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  res.status(500, res.send({ message: err.message }));
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});

export default app;
