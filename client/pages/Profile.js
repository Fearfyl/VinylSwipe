import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  // Hardcoded user id for MVP
  const userId = "66f123abc123def456789"; 

  useEffect(() => {
    api.get(`/users/${userId}`).then(setProfile);
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>{profile.username}'s Profile</h2>
      <p>Points: {profile.points}</p>
    </div>
  );
}
