import { getRecommendations } from "../services/spotifyService.js";
import Swipe from "../models/Swipe.js";

// @desc Get recommendations
// @route GET /api/recommendations
export const fetchRecommendations = async (req, res) => {
  try {
    const { artist, song } = req.query;
    const recs = await getRecommendations(artist, song);
    res.json(recs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Save swipe action
// @route POST /api/recommendations/swipe
export const saveSwipe = async (req, res) => {
  try {
    const { userId, trackId, trackName, artistName, action } = req.body;

    const swipe = await Swipe.create({
      user: userId,
      trackId,
      trackName,
      artistName,
      action,
    });

    res.status(201).json(swipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
