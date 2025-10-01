import React, { useState } from "react";
import RecommendationCard from "./RecommendationCard";

const SwipeDeck = ({ recommendations, onSwipe }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (action) => {
    const track = recommendations[currentIndex];
    onSwipe(track, action);
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= recommendations.length) {
    return <p className="text-center">🎉 No more recommendations!</p>;
  }

  return (
    <div className="flex justify-center">
      <RecommendationCard track={recommendations[currentIndex]} onSwipe={handleSwipe} />
    </div>
  );
};

export default SwipeDeck;
