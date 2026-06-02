import "./MobileHero.css"
import heroImage from "../../../assets/hero-m.png"
import { MobileMenuHandler } from "../../../javaScript_files/MobileMenuHandler";
export const MobileHero = () => {

    return (
    <>
       
        <MobileMenuHandler />
            <div className="mobile-hero">
                <div className="profile-card">
                    <div className="hamburger">
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    <div className="contact-parent">
                        <ul className="contactm">
                            <li><i className="fa-solid fa-x"></i></li>
                            <li><a href="#About-Me">About me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#service-section">Services</a></li>
                            <li><a href="#service-section">Projects</a></li>
                            <li className="resume">
                                <a
                                    href="./resume/JASWANTH KATUKURI.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    RESUME
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="profile-image">
                        <img src={heroImage} alt="" />
                    </div>

                    <div className="profile-content">
                        <h2>K. JASWANTH</h2>

                        {/* From Uiverse.io by StealthWorm */}
                        <div className="star-parent">
    <a
        href="https://mail.google.com/mail/?view=cm&to=katukurijaswanth2@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
    >
        <span className="text">HIRE ME</span>
        <span>Thanks 😊</span>
    </a>
</div>

                        <div className="mlinks">
                            <a
                                href="https://www.linkedin.com/in/jaswanth-katukuri-a00a87307/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a
                                href="https://www.instagram.com/jashuuuu.4/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a
                                href="https://github.com/katukurijaswanth2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=katukurijaswanth2@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-regular fa-envelope"></i>
                            </a>

                            <a
                                href="https://x.com/kjaswanth_2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </div>

                        <p className="bio">
                            Full-Stack Java Developer (Java, Spring Boot, React.js) with an MCA,
                            experienced in building scalable, user-focused web applications across
                            the complete development lifecycle.
                        </p>
                    </div>
                </div>
            </div>
       
        </>
    );
};