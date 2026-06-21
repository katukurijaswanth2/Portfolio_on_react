import "./Hero.css";
import heroImg from "./assets/large-hero.png";
import SocialLinks from "./components/features/contact/SocialLinks";
import { MobileHero } from "./components/features/hero/MobileHero";

export const Hero = () => {
  return (
    <>
    <MobileHero />
      <div className="hero">
        <div className="hero_brand">
          <nav className="glass-nav">
            <a href="#" className="nav-logo">
              JK<span>.</span>
            </a>
  
            <ul className="nav-links">
              <li>
               
                <a   href="#about_section"
              onClick={() => console.log("CLICKED")}>About</a>
              </li>
              {/*  */}
               <li>
                <a href="#growth_section">Education</a>
              </li>
              <li>

                <a href="#skills-section">Skills</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
             
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>

            <a href="#contact" className="nav-cta">
              Contact
            </a>
          </nav>
        </div>

        <div className="hero_photo_overlay" />

        <div className="hero_bottom_row">
          <div className="hero_name_wrap">
            <h1 className="hero_name">
              Jaswanth
              <br />
              Katukuri<sup>®</sup>
            </h1>
          </div>

          {/* Social links sit horizontally beside the name */}
          <SocialLinks horizontal />
        </div>
      </div>
    </>
  );
};
