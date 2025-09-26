import Song from "../models/Song.js";

// @desc Save a swipe (like/dislike)
// @route POST /api/swipes
export const saveSwipe = async (req, res) => {
  try {
    const { userId, trackId, track, artist, preview_url, liked } = req.body;

    if (!userId || !trackId) {
      return res.status(400).json({ message: "userId and trackId are required" });
    }

    const song = await Song.create({
      user: userId,
      trackId,
      track,
      artist,
      preview_url,
      liked,
    });

    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get liked songs for a user
// @route GET /api/swipes/:userId
export const getUserLikes = async (req, res) => {
  try {
    const { userId } = req.params;
    const songs = await Song.find({ user: userId, liked: true });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
