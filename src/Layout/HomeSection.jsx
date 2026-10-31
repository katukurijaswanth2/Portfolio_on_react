import { lazy } from "react"
import { Hero } from "../Hero"
import { TitleChange } from "../javaScript_files/TitleChange"
import LazyOnView from "../components/lazyLoading/LazyOnView"  
import HomeBlog from "../Pages/HomeBlog"
const About = lazy(() => import("../components/features/about/About"))
const Skills = lazy(() => import("../components/features/skills/Skills"))
const ContactForm = lazy(() => import("../components/Contactform/Contactform"))
const SoundEffects = lazy(() => import("../components/sounds/Usesoundeffects"))
const GrowthCurve = lazy(() =>
  import("../components/features/experience/GrowthCurve").then((m) => ({ default: m.GrowthCurve }))
)
const RolesSection = lazy(() =>
  import("../components/features/roles/RolesSection").then((m) => ({ default: m.RolesSection }))
)
const FrontEnd = lazy(() =>
  import("../components/features/skills/FrontEnd").then((m) => ({ default: m.FrontEnd }))
)
const Backend = lazy(() =>
  import("../components/features/skills/Backend").then((m) => ({ default: m.Backend }))
)
const FullStack = lazy(() =>
  import("../components/features/skills/FullStack").then((m) => ({ default: m.FullStack }))
)

export const HomeSection = () => {
  return (
    <>
      <TitleChange />
      <Hero />

      <LazyOnView><About /></LazyOnView>
      <LazyOnView><GrowthCurve /></LazyOnView>
      <LazyOnView><Skills /></LazyOnView>
      <LazyOnView><RolesSection /></LazyOnView>
      <LazyOnView><FrontEnd /></LazyOnView>
      <LazyOnView><Backend /></LazyOnView>
      <LazyOnView><FullStack /></LazyOnView>
       <LazyOnView ><HomeBlog /></LazyOnView>
      <LazyOnView><ContactForm /></LazyOnView>
     
       <LazyOnView minHeight="0"><SoundEffects /></LazyOnView>

      {/* Not visual, so load it after the page is idle */}
     
    </>
  )
}