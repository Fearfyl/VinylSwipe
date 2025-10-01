import mongoose from "mongoose";

const swipeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    trackId: { type: String, required: true },
    trackName: { type: String },
    artistName: { type: String },
    action: { type: String, enum: ["like", "dislike"], required: true },
  },
  { timestamps: true }
);

const Swipe = mongoose.model("Swipe", swipeSchema);
export default Swipe;
