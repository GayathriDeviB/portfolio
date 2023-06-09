import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Overview from "./pages/overview";
import Certification from "./pages/certification";
import Portfoliopage from "./pages/portfolio";
import Medialander from "./pages/medialander";
import Socialnetwork from "./pages/socialnetwork";
import Newsfeed from "./pages/newsfeed";
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/portfolio" element={<Portfoliopage />} />
          <Route path="/medialander" element={<Medialander />} />
          <Route path="/socialnetwork" element={<Socialnetwork />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
