import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users/leaderboard").then(setUsers);
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {users.map((u, i) => (
          <li key={u._id}>
            {i + 1}. {u.username} - {u.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
}
