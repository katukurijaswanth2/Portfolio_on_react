import "./MobileHero.css";
import { MobileMenuHandler } from "../../../javaScript_files/MobileMenuHandler";
import resume from "../../../assets/JaswanthKatukuri_Resume.pdf";
import imageofmine from "../../../assets/hero-m.webp"

// 👉 Replace this with your own image, e.g.
// import heroImage from "../../../assets/hero-m.webp";
const heroImage = "https://picsum.photos/700/1000?grayscale";

export const MobileHero = () => {
    return (
        <div className="mobile_parent">
            <div className="mobile-hero">
                <MobileMenuHandler />

                <div className="profile-card">
                    {/* PHOTO */}
                    <div className="hero-photo">
                        <img src={imageofmine} alt="K. Jaswanth" />

                    </div>

                    {/* HAMBURGER (kept for MobileMenuHandler) */}
                    <div className="hamburger">
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    {/* SIDE MENU (kept for MobileMenuHandler) */}
                    <div className="contact-parent">
                        <ul className="contactm">
                            <li><i className="fa-solid fa-x"></i></li>
                            <li><a href="#about_section">About me</a></li>
                            <li><a href="#growth_section">Education</a></li>
                            <li><a href="#skills-section">Skills</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#myBlogu">Blog</a></li>
                            <li className="resume">
                                <a href={resume} target="_blank" rel="noopener noreferrer">
                                    RESUME
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* SOCIAL ICONS (replace the stars) */}
                    <div className="mlinks">
                        <a
                            href="https://www.linkedin.com/in/jaswanth-katukuri-a00a87307/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/jashuuuu.4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://github.com/katukurijaswanth2"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://medium.com/@katukurijaswanth2"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Medium"
                        >
                            <i className="fa-brands fa-medium"></i>
                        </a>
                        <a
                            href="https://x.com/kjaswanth_2"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>

                    {/* BOTTOM AREA */}
                    <div className="hero-body">
                        <div className="profile-content">
                            <h1>
                                K. JASWANTH
                                <br />
                              SOFTWARE DEVELOPER
                            </h1>

                            <p className="hero-sub">
                                Spring Boot · React.js · MCA
                            </p>

                            <div className="hero-row">
                                <div className="hero-left">
                                    <div className="tech-icons">
                                        <i className="fa-brands fa-java"></i>
                                        <i className="fa-brands fa-react"></i>
                                        <i className="fa-brands fa-js"></i>
                                        <i className="fa-brands fa-html5"></i>
                                    </div>
                                    {/* <span className="hero-tag">FULL-STACK</span> */}
                                </div>

                                <div className="hero-actions">
                                    <a
                                        className="round-btn"
                                        href={resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Download resume"
                                    >
                                        <i className="fa-solid fa-download"></i>
                                    </a>
                                    <span className="round-label">CV</span>
                                    {/* <a
                                        className="round-btn"
                                        href="https://mail.google.com/mail/?view=cm&to=katukurijaswanth2@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Send email"
                                    >
                                        <i className="fa-solid fa-envelope"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>

                        {/* BLACK BAR (replaces ADD TO BAG) */}
                        <a
                            className="hire-bar"
                            href="https://mail.google.com/mail/?view=cm&to=katukurijaswanth2@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-solid fa-briefcase"></i>
                            <span>
                                HIRE <em>ME</em>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};