import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Work from "./work";

function App() {
  return (
    <Router>
      <nav style={navStyle}>
        <img
          src="https://avatars.githubusercontent.com/u/48626910?s=280&v=4"
          style={logoStyle}
          alt="logo"
        />
        <Link to="/">Home</Link>
        <Link to="/work" style={{ marginLeft: "20px" }}>Work</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

const navStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "10px",
  background: "#eee"
};

const logoStyle = {
  width: "50px",
  borderRadius: "50%"
};

export default App;
