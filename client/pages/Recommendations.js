import React, { useEffect, useState } from "react";
import SwipeDeck from "../components/SwipeDeck";
import api from "../utils/api";

const Recommendations = () => {
  const [recs, setRecs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.get("/recommendations?artist=Drake&song=Gods Plan");
      setRecs(data);
    };
    fetchData();
  }, []);

  const handleSwipe = async (track, action) => {
    await api.post("/recommendations/swipe", {
      userId: "replace_with_real_user_id",
      trackId: track.id || "mockId",
      trackName: track.track,
      artistName: track.artist,
      action,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🎶 Swipe Your Music</h1>
      <SwipeDeck recommendations={recs} onSwipe={handleSwipe} />
    </div>
  );
};

export default Recommendations;
