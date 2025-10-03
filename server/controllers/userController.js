import User from "../models/User.js";

// GET leaderboard
export const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching leaderboard" });
  }
};

// GET single profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error fetching profile" });
  }
};
