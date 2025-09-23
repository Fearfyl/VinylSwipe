import express from "express";
import { fetchRecommendations } from "../controllers/recommendationController.js";

const router = express.Router();

router.get("/", fetchRecommendations);

export default router;
