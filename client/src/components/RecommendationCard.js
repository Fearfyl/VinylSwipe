import React from "react";

const RecommendationCard = ({ track, onSwipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-80 text-center">
      <h2 className="text-xl font-bold">{track.track}</h2>
      <p className="text-gray-600">{track.artist}</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => onSwipe("dislike")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          👎
        </button>
        <button
          onClick={() => onSwipe("like")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          👍
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
