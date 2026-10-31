import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeSection } from "./Layout/HomeSection";
import WhyHireMe from "./Layout/WhyHireMe";


function App() {
  return (
    <>
   <Routes>

    <Route path="/" element ={<HomeSection /> }/>
    <Route path="/About" element ={<WhyHireMe />} />

    
   </Routes>
    
    </>
  );
}

export default App;