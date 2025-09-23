import React, { useState } from "react";
import { fetchRecommendations } from "./api.js";
import SwipeCard from "./components/SwipeCard.jsx";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState("");
  const [track, setTrack] = useState("");

  const handleFetch = async () => {
    const recs = await fetchRecommendations(artist, track);
    setSongs(recs);
  };

  const handleSwipe = (direction, song) => {
    console.log(`Swiped ${direction} on ${song.track}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎵 VinylSwipe</h1>
      <input
        placeholder="Favorite Artist ID"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        placeholder="Favorite Track ID"
        value={track}
        onChange={(e) => setTrack(e.target.value)}
      />
      <button onClick={handleFetch}>Get Recommendations</button>

      <div>
        {songs.map((song) => (
          <SwipeCard key={song.id} song={song} onSwipe={handleSwipe} />
        ))}
      </div>
    </div>
  );
}
