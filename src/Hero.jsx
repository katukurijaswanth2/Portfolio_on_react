import "./Hero.css";
import heroImg from "./assets/large-hero.png";
import SocialLinks from "./components/features/contact/SocialLinks";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <nav className="hero_nav">
          <div className="hero_brand">
            <span className="hero_brand_name">
              Jash<sup>®</sup>
            </span>
          </div>
          <button className="hero_menu_btn" aria-label="Open menu">
            Menu <span><i className="fa-solid fa-bars"></i></span>
          </button>
        </nav>

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