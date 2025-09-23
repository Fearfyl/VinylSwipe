export const fetchRecommendations = async (artist, track) => {
  const res = await fetch(
    `http://localhost:5000/api/recommendations?artist=${artist}&track=${track}`
  );
  return res.json();
};
