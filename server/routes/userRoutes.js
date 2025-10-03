import express from "express";
import { getLeaderboard, getProfile } from "../controllers/userController.js";

const router = express.Router();

router.get("/leaderboard", getLeaderboard);
router.get("/:id", getProfile);

export default router;
