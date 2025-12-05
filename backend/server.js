// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import authRoutes from "./authRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, ".env");
console.log("Checking .env at:", envPath);
console.log("Exists?", fs.existsSync(envPath));

// load .env
dotenv.config({ path: envPath });

// debug prints
console.log("Loaded MONGO_URI =", process.env.MONGO_URI ? "[OK]" : "undefined");
console.log("Loaded PORT =", process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json());

// Set up routes
app.use("/api/auth", authRoutes);

// connect with simple error handling
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected √");
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
  });