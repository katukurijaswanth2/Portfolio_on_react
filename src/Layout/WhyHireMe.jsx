// WhyHireMe.jsx
// -----------------------------------------------------------------------------
// Put WhyHireMe.jsx and WhyHireMe.css in the same folder.
//
// Install once (Font Awesome 6):
//   npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//
// Usage:
//   import WhyHireMe from "./WhyHireMe";
//   <WhyHireMe />                          // stock photo for now
//   <WhyHireMe photo="/my-photo.jpg" />    // your own picture later
//
// Items in [brackets] are placeholders (highlighted yellow). Fill in real,
// explainable details, then remove the `.wh-ph` highlight in the CSS.
// -----------------------------------------------------------------------------
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCheck,
  faQuoteLeft,
  faCode,
  faUsers,
  faChartLine,
  faListCheck,
  faCalendarCheck,
  faCircleInfo,
  faShieldHalved,
  faEnvelope,
  faPhone,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyHireMe.css";
import ContactForm from "../components/Contactform/Contactform";
import { useNavigate } from "react-router-dom";
import EditorialNav from "../components/common/buttons/EditorialNav";

// Temporary stock photo of a man. Replace with your own picture.
import PHOTO_SRC from 
  "../../src/assets/hero-m.webp";
// const PHOTO_FALLBACK = "../assets/hero-m.webp";

/* ---------- helper: **bold** and [placeholder] markup ---------- */
function Rich({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        const bold = p.startsWith("**") && p.endsWith("**");
        const inner = bold ? p.slice(2, -2) : p;
        const nodes = inner.split(/(\[[^\]]+\])/g).map((s, j) =>
          s.startsWith("[") ? (
            <span className="wh-ph" key={j}>
              {s}
            </span>
          ) : (
            <React.Fragment key={j}>{s}</React.Fragment>
          )
        );
        return bold ? <b key={i}>{nodes}</b> : <React.Fragment key={i}>{nodes}</React.Fragment>;
      })}
    </>
  );
}

function Bullets({ items }) {
  return (
    <ul className="wh-list">
      {items.map((t, i) => (
        <li key={i}>
          <FontAwesomeIcon icon={faAngleRight} className="wh-bullet" />
          <span>
            <Rich text={t} />
          </span>
        </li>
      ))}
    </ul>
  );
}

const Q = ({ children }) => <h3 className="wh-q">{children}</h3>;

function Head({ top, bottom, children, small }) {
  return (
    <header className="wh-p2head">
      <h1 className={"wh-title" + (small ? " wh-title-sm" : "")}>
        <span>{top}</span>
        <span>{bottom}</span>
      </h1>
      <p className="wh-standfirst wh-standfirst-sm">{children}</p>
    </header>
  );
}

function Folio({ n }) {
  return (
    <div className="wh-folio">
      <b>{n}</b>
      <span>Why You Should Hire Me</span>
    </div>
  );
}

/* ------------------------------ CONTENT ------------------------------ */

// Your paragraph, word for word (drop cap "I" + the rest).
const heroP1 =
  "am a Full Stack Java developer who has worked continuously from the first year of my graduation through the final year of my MCA, balancing a full-time professional degree with real job responsibilities. In that time I earned **four promotions in just 1.5 years**, because my managers saw that I learn quickly, take ownership, and deliver more each time I’m trusted with more. I also topped my academics while working, so I know how to meet deadlines, handle pressure, and produce quality results without compromise.";
const heroP2 =
  "On the technical side, I build complete applications: responsive front-end interfaces, robust Java backend services, and databases that connect them. My projects solve real-world problems and have created measurable business impact, and I completed them alongside my work and studies.";
const heroP3 =
  "Years of teaching and mentoring have also made me a clear communicator who explains technical ideas well, works well with teams, and takes feedback seriously. I am loyal and committed, and I’m looking for a company where I can grow long term and contribute for years. **If you want a developer who is already proven in the workplace, learns fast, and delivers from day one, I am that person.**";

const glance = [
  ["5 yrs", "of continuous work, from graduation year one to the final MCA year"],
  ["4", "promotions in just 1.5 years"],
  ["21", "students at the start, later [120] per batch"],

  ["Top", "academics while holding two jobs"],
];

const grow = [
  "**4 promotions in 1.5 years:** tutor, then Computer Science teacher, then Science and Computer Science together. Every step was earned through results, never requested.",
  "Trusted with **IIT foundation students**, a higher-responsibility role given on merit.",
  "Managed **21 students** at the start and later **[120] students per batch** across school and hostel roles, so I already plan, lead and own outcomes.",
  "Ran **two jobs plus a full-time MCA** at the same time and still topped my academics.",
  "Completed a **Full Stack Java certification**, self-funded. I invest in my own skills without being told to.",
];

const deliver = [
  "Balanced **study, teaching and project work in parallel**, meeting exam dates, class schedules and project deadlines.",
  "Passed a **subject test and a demo class in front of experienced educators** and received my offer within **2 days**.",
  "Was handed **a bigger role each time** because I delivered consistently.",
];

const impact = [
  "**[8] full stack projects** built end to end: database, REST APIs and user interface.",
  "**[Grantify ]** is used by **[306] users** and **[result, e.g., reduced manual work by 90%]**.",
  "I start from the business problem, then choose the tools to solve it.",
];

const stay = [
  "I stayed and grew within the same institutions, earning **4 promotions** instead of switching jobs.",
  "Managers gave me **more responsibility every time**, and that trust came from reliability.",
  "I want a company where I can **grow for years**, take ownership and contribute long term.",
  "Learning is part of my job, so you get **an employee who keeps improving**.",
];

const risk = [
  "I already know what a workplace demands: **about 5 years of real work**, so there is no long ramp-up on professionalism, deadlines or reporting lines.",
  "I learn on the job: each of my **4 promotions** meant picking up a new subject, role or technology and delivering on it.",
  "My fundamentals are tested: Core Java, OOP, Collections, Spring Boot, REST, SQL and a modern front end, plus regular **DSA** practice.",
];

const team = [
  "Taught **[500]+ students** daily, which trained me to make hard ideas simple for any audience.",
  "Worked with managers, HODs and fellow educators, and **improved from their feedback**.",
  "I can walk you through **every project**: why I built it, the tech stack and the challenges I solved.",
];

const verify = [
  "**Live technical round:** test me on Java, Spring Boot, SQL or a small coding problem, in person or online.",
  // "**Project walkthrough:** every project on my GitHub has a clear README, screenshots and a live link **[<a>links</a>]**.",
  // "**References:** my managers can speak to my promotions and reliability **[add contact details if allowed]**.",
];

const tech = [
  ["Backend", "Core Java, OOP, Collections, Exception Handling, Multithreading, **[Spring Boot]**, REST APIs, JDBC, Hibernate/JPA"],
  ["Frontend", "HTML, CSS, JavaScript, **[React]**, responsive design"],
  ["Database", "MySQL / SQL, joins, queries, schema design"],
  ["Tools", "Git/GitHub, Maven, Postman, IDEs (IntelliJ / Eclipse)"],
  ["Concepts", "MVC architecture, authentication, CRUD applications, clean and maintainable code, debugging"],
];

const interpersonal = [
  ["Communication", "Explaining difficult concepts to **[number]+ students** daily taught me to make technical ideas simple."],
  ["Leadership", "Guiding students in academics, discipline and direction."],
  ["Time management", "Balancing **work + MCA + projects** across **5 years**."],
  ["Adaptability", "Learned new subjects, roles and technologies quickly, shown by **4 promotions in 1.5 years**."],
  ["Ownership", "I finish what I start and take responsibility for outcomes."],
  ["Teamwork and feedback", "Worked with managers, HODs and fellow educators, and improved from feedback."],
  ["Resilience", "I stay focused and productive under pressure."],
];

const numbers = [
  ["Years of continuous work", "~5 years"],
  ["Promotions", "4 in 1.5 years"],
  ["Students at the start", "21"],
  ["Students handled later", "**[500]**"],
  ["Certification", "Full Stack Java (self-funded)"],
  ["Projects completed", "**[20+]**"],
  ["Academic result", "**[CGPA / 8]**"],
];

// What hiring teams screen for (per current recruiter guidance) and my proof
const checklist = [
  ["Strong Java and OOP fundamentals", "Core Java, OOP, Collections, Exception Handling, Multithreading"],
  ["Full stack breadth", "Spring Boot, REST APIs, JDBC, Hibernate/JPA, HTML/CSS/JS, **[React ]**, MySQL"],
  ["Real projects, not tutorials", "**[20+] end-to-end projects**, including **[Project Name]** with **[impact]**"],
  ["Willingness and speed to learn", "4 promotions in 1.5 years, self-funded certification, top academics"],
  ["Growth in responsibility and trust", "Promoted four times, IIT foundation batch, **[number] students per batch**"],
  ["Communication and teamwork", "Daily teaching, worked with managers, HODs and educators, improves from feedback"],
  ["Problem solving and clean code", "Debugging, maintainable code, MVC design, regular DSA practice"],
  ["Retention and commitment", "Stayed and grew inside the same institutions instead of switching"],
];

const plan = [
  ["Days 1 to 30", "Learn the codebase, standards and tools. Ship small, reviewed tickets and ask the right questions early."],
  ["Days 31 to 60", "Own a feature end to end across API, database and UI, with clean commits and tests."],
  ["Days 61 to 90", "Improve what I touched, share what I learned with the team, and take the next bigger task."],
];

const pitch =
  "I am a Full Stack Java developer who turns learning into results: **four promotions in 1.5 years**, consistently top academics, and **[20+] end-to-end projects**, including **[Grantify]**. I work across  **[Spring Boot]**, REST APIs, SQL and **[React.js]**, and I debug and ship clean code. I own what I start, I grow where I am trusted, and I want a team to build with for years. Give me the seat, and I will make the decision look easy.";

/* ------------------------------ COMPONENT ------------------------------ */
export default function WhyHireMe() {
 

  const navigate = useNavigate();
  return (<>
<EditorialNav />

    <div className="wh-root">
      {/* ============================ PAGE 1 ============================ */}
      <article className="wh-page">
        <div className="wh-grid">
          <div className="wh-left">
            <h1 className="wh-title">
              <span>WHY</span>

              <span className="hire_me">HIRE ME</span>

            </h1>

            <p className="wh-standfirst">
              Jaswanth Katukuri, Full Stack Java developer, on why a team gets a fresher who already
              performs like a proven hire
            </p>

            <div className="wh-glance">
              {glance.map(([n, l]) => (
                <div className="wh-stat" key={n + l}>
                  <strong>{n}</strong>
                  <span>
                    <Rich text={l} />
                  </span>
                </div>
              ))}
            </div>
          </div>

         

<figure className="wh-photo">
  <img
    src={PHOTO_SRC}
    alt="Jaswanth Katukuri"
    loading="lazy"
    onError={(e) => {
      e.currentTarget.onerror = null; // stops an infinite loop if the fallback also fails
      e.currentTarget.src = PHOTO_FALLBACK;
    }}
  />
</figure>

          <div className="wh-hero">
            <p>
              <span className="wh-dropcap">I</span>
              <Rich text={heroP1} />
            </p>
            <p>
              <Rich text={heroP2} />
            </p>
            <p>
              <Rich text={heroP3} />
            </p>
          </div>

          <div className="wh-credit"> JASWANTH KATUKURI. </div>
        </div>
        <Folio n="01" />
      </article>

      {/* ============================ PAGE 2 ============================ */}
      <article className="wh-page wh-page2">
        <Head top="PROOF" bottom="AT WORK">
          Five questions every hiring manager asks about a fresher, answered with facts from
          My work history
        </Head>

        <div className="wh-cols">
          <Q>Can he learn and grow on the job?</Q>
          <Bullets items={grow} />

          <Q>Does he deliver under pressure?</Q>
          <Bullets items={deliver} />

          <Q>Do his projects create real-world impact?</Q>
          <Bullets items={impact} />

          <Q>Will he stay and grow with us?</Q>
          <Bullets items={stay} />

          <Q>Is hiring a fresher a risk?</Q>
          <Bullets items={risk} />

          <Q>Can he communicate and work in a team?</Q>
          <Bullets items={team} />

          <Q>How can you verify all of this?</Q>
          <Bullets items={verify} />
        </div>
        <Folio n="02" />
      </article>

      {/* ============================ PAGE 3 ============================ */}
      <article className="wh-page wh-page2">
        <Head top="SKILLS" bottom="& NUMBERS" small>
          The technical and interpersonal skills Jaswanth brings to full stack, front end and Java
          backend roles, and what a hiring team looks for
        </Head>

        <div className="wh-three">
          <section>
            <h2 className="wh-sec">
              <FontAwesomeIcon icon={faCode} /> Technical Skills (Strong Command)
            </h2>
            {tech.map(([k, v]) => (
              <p className="wh-kv" key={k}>
                <b>{k}:</b> <Rich text={v} />
              </p>
            ))}
          </section>

          <section>
            <h2 className="wh-sec">
              <FontAwesomeIcon icon={faUsers} /> Interpersonal Skills (Proven at Work)
            </h2>
            {interpersonal.map(([k, v]) => (
              <p className="wh-kv" key={k}>
                <b>{k}:</b> <Rich text={v} />
              </p>
            ))}
          </section>

          <section>
            <h2 className="wh-sec">
              <FontAwesomeIcon icon={faChartLine} /> The Numbers
            </h2>
            <table className="wh-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>My Number</th>
                </tr>
              </thead>
              <tbody>
                {numbers.map(([k, v]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>
                      <Rich text={v} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>


        <Folio n="03" />
      </article>

      {/* ============================ PAGE 4 ============================ */}
      <article className="wh-page wh-page2">
        <Head top="YOUR" bottom="NEXT HIRE" small>
          The 30-second pitch, a ninety-day plan, and a simple way to say yes
        </Head>

        <blockquote className="wh-pitch">
          <FontAwesomeIcon icon={faQuoteLeft} className="wh-quote-ico" />
          <h2>30-Second Pitch</h2>
          <p>
            <Rich text={pitch} />
          </p>
        </blockquote>

        <section className="wh-plan">
          <h2 className="wh-sec">
            <FontAwesomeIcon icon={faCalendarCheck} /> My first ninety days with your team
          </h2>
          <div className="wh-plan-grid">
            {plan.map(([when, what]) => (
              <div key={when}>
                <b>{when}</b>
                <p>{what}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="wh-close">
          <h2 className="wh-sec">
            <FontAwesomeIcon icon={faShieldHalved} /> The decision in one line
          </h2>
          <p>
            You get a developer who is already proven in the workplace, learns fast, stays loyal,
            and delivers from day one. <b>I am that person.</b>
          </p>

        </section>

        {/* <div className="wh-note">
          <FontAwesomeIcon icon={faCircleInfo} /> Items in <span className="wh-ph">[brackets]</span>{" "}
          are placeholders. Replace them with real details before sending, and only claim what you
          can explain in an interview.
        </div>
        <Folio n="04" /> */}
      </article>
    </div>
    <ContactForm />
  </>


  );
}