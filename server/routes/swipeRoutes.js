import express from "express";
import { saveSwipe, getUserLikes } from "../controllers/swipeController.js";

const router = express.Router();

// Save a swipe
router.post("/", saveSwipe);

// Get all liked songs for a user
router.get("/:userId", getUserLikes);

export default router;
