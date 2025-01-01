import path from "path";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// DEPLOYMENT
const __dirname = path.resolve();

dotenv.config();
dotenv.config({ path: "./config.env" });
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reservation", reservationRouter);

// DEPLOYMENT
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

dbConnection();

app.use(errorMiddleware);

export default app;