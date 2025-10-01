import express from "express";
import {
  fetchRecommendations,
  saveSwipe,
} from "../controllers/recommendationController.js";

const router = express.Router();

router.get("/", fetchRecommendations);
router.post("/swipe", saveSwipe);

export default router;
