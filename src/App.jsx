import "./App.css";
import { Hero } from "./Hero";

import Skills from "./components/features/skills/Skills.jsx";


import { ProjectsSection } from "./components/features/projects/ProjectsSection";
import { FrontEnd } from "./components/features/skills/FrontEnd.jsx";
import { Backend } from "./components/features/skills/Backend.jsx";
import { FullStack } from "./components/features/skills/FullStack.jsx";
import { About } from "./components/features/about/About";
import { GrowthCurve } from "./components/features/experience/GrowthCurve";
import { RolesSection } from "./components/features/roles/RolesSection.jsx";
import { TitleChange } from "./javaScript_files/TitleChange.jsx";
function App() {
  return (
    <>
    {/* title change here */}
    <TitleChange />
    {/* title change component above there */}
    <Hero />
      <About />
      <GrowthCurve />
      <Skills />
      <RolesSection />

      <FullStack />

      <FrontEnd />
      <Backend />
    </>
  );
}

export default App;
