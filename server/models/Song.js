import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    trackId: { type: String, required: true },
    track: { type: String, required: true },
    artist: { type: String, required: true },
    preview_url: { type: String },
    liked: { type: Boolean, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Song = mongoose.model("Song", songSchema);
export default Song;
