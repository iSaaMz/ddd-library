import express from "express";
import BookRoutes from "./routes/BookRoutes";

const app = express();
app.use(express.json());
app.use("/api", BookRoutes);

export default app;
