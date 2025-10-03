import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Recommendations from "./pages/Recommendations";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Recommendations />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
