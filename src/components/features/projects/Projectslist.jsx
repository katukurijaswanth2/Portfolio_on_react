import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AboutMe from "../../../assets/hero.png"
import katukuriXpress from "../../../assets/KatukuriXpress.png"
import foodieGo from "../../../assets/foodieGo.jpg"
import driveWise from "../../../assets/drivewise.png"
import gravity from "../../../assets/Grantify.png"
import portfolio from "../../../assets/portfolio.png"
import workforse from "../../../assets/WorkForceHub.png"
import prioritycare from "../../../assets/priorityQueue.png"
import './Projectslist.css';

const frontendProjects = [
  {
    title: "KatukuriXpress",
    description: "Responsive website with React.js, Tailwind CSS, Redux Toolkit, and JavaScript.",
    image: katukuriXpress,
    github: "https://github.com/katukurijaswanth2/KatukuriXpress.git",
    live: "https://katukurixpress.vercel.app/"
  },
  {
    title: "FoodieGo",
    description: "Responsive shopping website built using HTML, CSS, and JavaScript.",
    image: foodieGo,
    github: "https://github.com/katukurijaswanth2/Foodiego.git",
    live: "https://foodiego-by-jaswanth.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase skills and projects.",
    image: portfolio,
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourusername.github.io/portfolio"
  },
  {
    title: "DriveWise",
    description: "DriveWise recommends vehicles based on your income for smarter, easier choices.",
    image: driveWise,
    github: "https://github.com/katukurijaswanth2/drivewise.git",
    live: "https://yourusername.github.io/weather-app"
  },
  {
    title: "Grantify",
    description: "Web app that helps students discover scholarships by filtering through income, state, and education level.",
    image: gravity,
    github: "https://github.com/katukurijaswanth2/Scholarship-Finder.git",
    live: "https://scholarpath-gamma.vercel.app/"
  }
];

const backendProjects = [
  {
    title: "PriorityCare",
    description: "Java backend hospital triage system that prioritizes patients using efficient data structures.",
    image: prioritycare,
    github: "https://github.com/katukurijaswanth2/javaProjects.git",
    live: "https://github.com/katukurijaswanth2/javaProjects.git"
  },
  {
    title: "WorkForceHub",
    description: "Spring Boot Employee Management REST API with secure CRUD operations and MySQL integration.",
    image: workforse,
    github: "https://github.com/katukurijaswanth2/employee_management.git",
    live: "https://github.com/katukurijaswanth2/employee_management.git"
  }
];

const fullStackProjects = [
  {
    title: "Full Stack E-Commerce",
    description: "Complete e-commerce app with Spring Boot, JWT authentication, MySQL and responsive frontend.",
    image: foodieGo,
    github: "https://github.com/yourusername/fullstack-ecommerce",
    live: "https://yourusername.github.io/fullstack-ecommerce"
  },
  {
    title: "Online Banking System",
    description: "Secure banking application with role-based authentication and dashboards.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/online-banking-system",
    live: "https://yourusername.github.io/online-banking-system"
  },
  {
    title: "Employee Management System",
    description: "Employee management application with CRUD operations and MySQL.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/employee-management-system",
    live: "https://yourusername.github.io/employee-management-system"
  },
  {
    title: "Task Management App",
    description: "Task management application with JWT authentication and REST APIs.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/task-management-app",
    live: "https://yourusername.github.io/task-management-app"
  },
  {
    title: "Student Management System",
    description: "Student management application using Spring Boot, JPA and MySQL.",
    image: AboutMe,
    github: "https://github.com/yourusername/student-management-system",
    live: "https://yourusername.github.io/student-management-system"
  }
];

const projectsMap = {
  FrontEnd: frontendProjects,
  Backend: backendProjects,
  FullStack: fullStackProjects
};

export const ProjectsList = ({ role = "FrontEnd" }) => {
  const projects = projectsMap[role] || [];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth"
    });
  };

  return (
    <div className="blackbackground">
    <div className="projects-wrapper">
      <div className="button_chevron">
        <button
          className="scroll-btn"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="scroll-btn"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="project-lists" ref={scrollRef}>
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-tit">
              <div className="project-image">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-content">
                <h3>{p.title}</h3>
              </div>
            </div>

            <div className="project_details">
              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};