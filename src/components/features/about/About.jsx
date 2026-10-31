import "./About.css";
// import "./AboutExtras.css"; // new styles for the highlights + CTA (import AFTER About.css)
import { Briefcase, TrendingUp, GraduationCap, Code2 } from "lucide-react";
import AboutMe from "../../../assets/AboutMe.webp";
import HireMeButton from "../../Contactform/HireMeButton";

const stats = [
  {
    icon: Briefcase,
    value: "5 yrs",
    label: "Continuous work experience",
    tone: "blue",
  },
  {
    icon: TrendingUp,
    value: "4",
    label: "Promotions in 1.5 years",
    tone: "green",
  },
  {
    icon: GraduationCap,
    value: "MCA",
    label: "Vaagdevi College, 2023–2025",
    tone: "purple",
  },
  {
    icon: Code2,
    value: "10+",
    label: "Projects completed",
    tone: "amber",
  },
];

const stack = ["Java", "Spring Boot", "React.js", "SQL"];

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
                  <p className="about_role">Full-Stack Java Developer</p>
                </div>
              </div>

              <p className="about_lead">
                I build scalable, user-focused web applications that people
                actually enjoy using.
              </p>

              <ul className="about_chips" aria-label="Core technologies">
                {stack.map((tech) => (
                  <li key={tech} className="about_chip">
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="about_para about_body">
                I hold an MCA from Vaagdevi College of Engineering (2023–2025)
                and a B.Sc. (MPCS) with an 8 GPA. Unlike most freshers, I bring
                about <strong>five years of continuous work experience</strong>{" "}
                and earned <strong>four promotions in just 1.5 years</strong>,
                while funding my own education and completing a professional
                Full Stack Java course.
              </p>

              <p className="about_para about_body">
                I take ownership, meet deadlines and learn fast. I'm looking for
                a team where I can grow long term and deliver from day one.
              </p>

              {/* HIGHLIGHTS */}
              {/* <ul className="about_stats">
                {stats.map(({ icon: Icon, value, label, tone }) => (
                  <li key={label} className={`about_stat about_stat--${tone}`}>
                    <span className="about_stat_icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="about_stat_text">
                      <span className="about_stat_value">{value}</span>
                      <span className="about_stat_label">{label}</span>
                    </span>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* IMAGE */}
            <div className="about_image">
              <span className="about_dotgrid" aria-hidden="true" />
              <div className="about_image_card">
                <img src={AboutMe} alt="Jaswanth Katukuri" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="about_cta">
          <div className="about_cta_copy">
            <h2 className="about_cta_title">
              Want to know why I'm the right hire?
            </h2>
            <p className="about_cta_sub">
              Let's talk about what I can deliver from day one.
            </p>
          </div>
          <div className="about_cta_action">
            <HireMeButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;