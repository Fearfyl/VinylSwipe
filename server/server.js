import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

import swipeRoutes from "./routes/swipeRoutes.js";


import swipeRoutes from "./routes/swipeRoutes.js";


dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/recommendations", recommendationRoutes);

app.use("/api/swipes", swipeRoutes);


app.use("/api/swipes", swipeRoutes);



// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
