// Fetch recommendations from server
export const fetchRecommendations = async (artist, track) => {
  const res = await fetch(
    `http://localhost:5000/api/recommendations?artist=${artist}&track=${track}`
  );
  return res.json();
};

// Save swipe (like/dislike)
export const saveSwipe = async (swipeData) => {
  const res = await fetch("http://localhost:5000/api/swipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(swipeData),
  });
  return res.json();
};
