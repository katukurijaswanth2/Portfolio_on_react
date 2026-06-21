import "./App.css";
import { Hero } from "./Hero";
import { lazy } from "react";

// import Skills from "./components/features/skills/Skills.jsx";

const Skills = lazy(() => import("./components/features/skills/Skills"));
import { ProjectsSection } from "./components/features/projects/ProjectsSection";
import { FrontEnd } from "./components/features/skills/FrontEnd.jsx";
import { Backend } from "./components/features/skills/Backend.jsx";
import { FullStack } from "./components/features/skills/FullStack.jsx";
import { About } from "./components/features/about/About";
import { GrowthCurve } from "./components/features/experience/GrowthCurve";
import { RolesSection } from "./components/features/roles/RolesSection.jsx";
import { TitleChange } from "./javaScript_files/TitleChange.jsx";
import ContactForm from "./components/Contactform/Contactform.jsx";
import LazySection from "./components/Contactform/LazySectiom.jsx";
function App() {
  return (
    <>

    <TitleChange />

      <Hero />
      <About />
      <GrowthCurve />
      <LazySection >
      <Skills />
      </LazySection>
      <RolesSection />

      <FullStack />

      <FrontEnd />
      <Backend />
<ContactForm />
    </>
  );
}

export default App;
