import React from "react";
import "./Skills.css";
import mvc from "../../../assets/mvc.svg"
import cleanCode from "../../../assets/cleancode.svg";
const skills = [
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Spring MVC",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Spring Data JPA (Hibernate)",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
  },
  {
    name: "RESTful APIs",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "SQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Maven",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
  },
  {
    name: "Postman",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "JUnit",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg",
  },
  {
    name: "Data Structures",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg",
  },
  {
    name: "intellij",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
  },
  {
    name: "Clean Code",
    image: cleanCode,
  },
  {
    name: "MVC Architecture",
    image: mvc,
  },
  {
    name: "React.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills-section">
      <div className="skills-title">
        <span className="skills-my">Technical </span>
        <span className="skills-curve">Skills</span>
      </div>
      <div className="skills-parent">
        <div className="skills-my-skills">
          {skills.map((skill) => (
            <div className="skills-box" key={skill.name}>
              <span className="skills-name">{skill.name}</span>
              <img src={skill.image} alt={skill.name} className="skills-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
