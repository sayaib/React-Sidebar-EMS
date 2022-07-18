import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import DashboardOne from "./pages/DashboardOne"
import DashboardTwo from "./pages/DashboardTwo";
import DashboardThree from "./pages/DashboardThree";
import Team from "./components/Team/Team";

import NavContext from "./Context/NavContext";
function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <div className="App">
      <NavContext.Provider value={value}>
        <Navbar />
        <Container
          stickyNav={<RightNavbar />}
          content={
            <Routes>
              <Route path="/" element={<DashboardOne />} />
              <Route path="/analytics" element={<DashboardTwo />} />
              <Route path="/campaings" element={<DashboardThree />} />
              <Route path="/team" element={<Team />} />
              <Route path="/messages" element={<main>Messages</main>} />
            </Routes>
          }
        />
      </NavContext.Provider>
    </div>
  );
}

export default App;
