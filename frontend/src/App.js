import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import LandingScreen from "./screens/LandingScreen";
import RegisterScreen from "./screens/RegisterScreen";
import WorkOutLog from "./screens/WorkOutLogScreen";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="header-title">
          <h2>
            <Link to="/">Titianz</Link>
          </h2>
        </div>

        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/workoutlog">Workouts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/dashboard" element={<HomeScreen />} />
          <Route path="/workoutlog" element={<WorkOutLog />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
