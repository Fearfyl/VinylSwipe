import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { username, favoriteArtist, favoriteSong } = req.body;
    const user = await User.create({ username, favoriteArtist, favoriteSong });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
