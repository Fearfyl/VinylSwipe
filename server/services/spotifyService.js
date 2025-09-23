import fetch from "node-fetch";

let accessToken = null;

// Get a new Spotify token
const getAccessToken = async () => {
  const authString = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
  const base64Auth = Buffer.from(authString).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64Auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
};

// Fetch recommendations from Spotify
export const getRecommendations = async (artist, track) => {
  if (!accessToken) {
    await getAccessToken();
  }

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/recommendations?limit=5&seed_artists=${artist}&seed_tracks=${track}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = await response.json();
    return data.tracks.map((t) => ({
      id: t.id,
      track: t.name,
      artist: t.artists.map((a) => a.name).join(", "),
      preview_url: t.preview_url,
    }));
  } catch (error) {
    console.error("Spotify error:", error);
    return [];
  }
};
