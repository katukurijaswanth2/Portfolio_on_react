import "./About.css";
import { Code2, GraduationCap, Trophy } from "lucide-react";
import AboutMe from "../../../../src/assets/AboutMe.png";

const stats = [
  {
    icon: Code2,
    value: "10+",
    label: "Projects Completed",
    tone: "blue",
  },
  {
    icon: GraduationCap,
    value: "MCA",
    label: "Master's Degree",
    tone: "green",
  },
  // {
  //   icon: Trophy,
  //   value: "Achievements",
  //   label: "Academic & Technical",
  //   tone: "purple",
  // },
];

export const About = () => {
  return (
    <section id="about_section">
      <div className="about_main">
        {/* TITLE */}
        <div className="about_title">
          <span className="about_title_eyebrow">
            About me
            <span className="about_title_line">
              <span className="about_title_dot" />
            </span>
          </span>
        </div>

        {/* MAIN LAYOUT */}
        <div className="about_matter">
          <div className="about_matter_inside">
            {/* TEXT CONTENT */}
            <div className="about_content">
              <div className="about_hello_wrap">
                <h1 className="about_hello">Hello!</h1>
                <span className="about_title_curve">I'm Jaswanth</span>
              </div>

              <div className="about_identity">
                <div>
                  {/* <h2 className="about_name">Katukuri Jaswanth</h2> */}
                  <p className="about_role">Full-Stack Java Developer</p>
                </div>
              </div>

              <p className="about_para">
                I'm a Full-Stack Java Developer with hands-on experience
                building scalable, user-focused web applications using Java,
                Spring Boot, and React.js. I enjoy working across the entire
                development lifecycle from designing clean and efficient
                backend APIs to creating responsive, intuitive user
                interfaces. I completed my Master of Computer Applications
                (MCA) from Vaagdevi College of Engineering (2023–2025) and
                earned my Bachelor of Science (B.Sc. MPCS) from Vivekavardhani
                Degree and PG College, graduating with a 7.8 GPA.
              </p>

              {/* STATS */}
              <div className="about_stats">
                {stats.map(({ icon: Icon, value, label, tone }, i) => (
                  <div
                    className="about_stat"
                    key={label}
                    style={{ "--stat-delay": `${i * 0.12}s` }}
                  >
                    <div className={`about_stat_icon about_stat_icon--${tone}`}>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <p className="about_stat_value">{value}</p>
                    <p className="about_stat_label">{label}</p>
                    <span className={`about_stat_underline about_stat_underline--${tone}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="about_image">
              {/* <span className="about_frame about_frame--tl" aria-hidden="true" />
              <span className="about_frame about_frame--br" aria-hidden="true" /> */}
              <span className="about_dotgrid" aria-hidden="true" />
              <div className="about_image_card">
                <img src={AboutMe} alt="Jaswanth Katukuri" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;