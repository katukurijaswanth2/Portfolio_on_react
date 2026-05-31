import "./About.css";
import AboutMe from "../../../../src/assets/AboutMe.png"
export const About = () => {
  return (
    <section id="about_section">
      <div className="about_main">
        {/* TITLE */}
        <div className="about_title">
          <span className="about_title_dark">About </span>
          <span className="about_title_curve">Me!</span>
        </div>

        {/* MAIN LAYOUT */}
        <div className="about_matter">
          <div className="about_matter_inside">

            {/* TEXT CONTENT */}
            <div className="about_content">
              <h1 className="about_hello">Hello!</h1>
              <h1 className="about_name">I'M JASWANTH KATUKURI</h1>
              <p className="about_para">
                I'm a Full-Stack Java Developer with hands-on experience building scalable,
                user-focused web applications using Java, Spring Boot, and React.js. I enjoy
                working across the entire development lifecycle from designing clean and efficient
                backend APIs to creating responsive, intuitive user interfaces.

                I completed my Master of Computer Applications (MCA) from Vaagdevi College of
                Engineering (2023–2025) and earned my Bachelor of Science (B.Sc. MPCS) from
                Vivekavardhani Degree and PG College, graduating with a 7.8 GPA.
              </p>
            </div>

            {/* ARROW */}


            {/* IMAGE */}
            <div className="about_image">
              <img src={AboutMe} alt="Jaswanth Katukuri" loading="lazy" />
            </div>

          </div>
        </div>
        {/* <div className="about_arrow">
        <img src="src\assets\arrow.png" alt="arrow" />
      </div> */}
      </div>
    </section>
  );
};