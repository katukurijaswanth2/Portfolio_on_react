
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { HomeSection } from "./Layout/HomeSection";
import WhyHireMe from "./Layout/WhyHireMe";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/about" element={<WhyHireMe />} />
      <Route path="*" element={<HomeSection />} />
    </Routes>
  );
}

export default App;
