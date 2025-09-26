import React, { useState } from "react";

export default function SwipeCard({ song, onSwipe }) {
  const [swiped, setSwiped] = useState(false);

  const handleSwipe = (direction) => {
    setSwiped(true);
    onSwipe(direction, song);
  };

  if (swiped) return null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h3>{song.track}</h3>
      <p>{song.artist}</p>
      {song.preview_url && (
        <audio controls>
          <source src={song.preview_url} type="audio/mpeg" />
        </audio>
      )}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => handleSwipe("left")}>👎 Dislike</button>
        <button onClick={() => handleSwipe("right")}>👍 Like</button>
      </div>
    </div>
  );
}
