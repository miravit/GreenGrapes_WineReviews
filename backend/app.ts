import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import reviewRoutes from "./src/routes/reviewRoutes";
import cors from "cors";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`processing ${req.method} request to ${req.path}`);
  console.log(req.path);
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/v1/review", reviewRoutes);

app.use((req, res) => {
  const isApiPath = req.path.startsWith("/api/");

  if (isApiPath) return res.sendStatus(404);

  return;
});

const port = process.env.PORT || 5000;
async function run() {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");

    app.listen(port, () => {
      console.log(`server running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
run();

module.exports = app;
