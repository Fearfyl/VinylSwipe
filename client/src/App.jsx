import React, { useState } from "react";
import { fetchRecommendations, saveSwipe } from "../utils/api.js";
import SwipeCard from "./components/SwipeCard.jsx";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState("");
  const [track, setTrack] = useState("");
  const [userId, setUserId] = useState("12345"); // Placeholder until auth is added

  const handleFetch = async () => {
    const recs = await fetchRecommendations(artist, track);
    setSongs(recs);
  };

  const handleSwipe = async (direction, song) => {
    const liked = direction === "right";
    console.log(`Swiped ${direction} on ${song.track}`);

    await saveSwipe({
      userId,
      trackId: song.id,
      track: song.track,
      artist: song.artist,
      preview_url: song.preview_url,
      liked,
    });
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
