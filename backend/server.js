import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ===== Fix __dirname for ES modules & load .env properly =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// ===== Routes Imports =====
import authRoutes from "./authRoutes.js";
import blogRoutes from "./blogRoutes.js";
import commentRoutes from "./commentRoutes.js";

const app = express();

// ===== Middleware (CORS & Body Parsing) =====
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// ===== Routes =====
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/comments", commentRoutes);

// ===== MongoDB Connection & Debugging =====
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Fatal: MONGO_URI is not defined in environment variables or .env file.");
  process.exit(1);
}

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("❌ Mongoose default connection error: " + err);
});

db.on("disconnected", () => {
  console.log("⚠️ Mongoose default connection disconnected");
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully to Atlas!"))
  .catch((err) => {
    console.error("❌ MongoDB connection failed during startup:", err.message);
    process.exit(1);
  });

// ===== Server Startup =====
const PORT = process.env.PORT || 5000;

app
  .listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  })
  .on("error", (e) => {
    if (e.code === "EADDRINUSE") {
      console.error(`❌ Port ${PORT} is already in use. Try a different port or stop the conflicting process.`);
    } else {
      console.error("❌ Server startup failed:", e.message);
    }
    process.exit(1);
  });