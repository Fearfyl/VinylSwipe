import { getRecommendations } from "../services/spotifyService.js";

// @desc Get song recommendations
// @route GET /api/recommendations?artist=xxx&track=yyy
export const fetchRecommendations = async (req, res) => {
  try {
    const { artist, track } = req.query;
    if (!artist || !track) {
      return res.status(400).json({ message: "Artist and track are required" });
    }

    const recs = await getRecommendations(artist, track);
    res.json(recs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
