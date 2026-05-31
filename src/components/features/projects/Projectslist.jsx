import './Projectslist.css'

const frontendProjects = [
  {
    title: "KatukuriXpress",
    description: "Responsive website with React.js tailwindcss, redux toolkit, javaScript",
    image: "./images/KatukuriXpress.png",
    github: "https://github.com/katukurijaswanth2/KatukuriXpress.git",
    live: "https://katukurixpress.vercel.app/"
  },
  {
    title: "FoodieGo",
    description: "Responsive shopping website built using HTML, CSS, and JavaScript.",
    image: "./images/foodieGo.jpg",
    github: "https://github.com/katukurijaswanth2/Foodiego.git",
    live: "https://foodiego-by-jaswanth.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase skills and projects.",
    image: "./images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourusername.github.io/portfolio"
  },
  {
    title: "DriveWise",
    description: "DriveWise recommends vehicles based on your income for smarter, easier choices.",
    image: "./images/drivewise.png",
    github: "https://github.com/katukurijaswanth2/drivewise.git",
    live: "https://yourusername.github.io/weather-app"
  },
  {
    title: "Grantify",
    description: "Web app that helps students discover scholarships by filtering through income, state, and education level, with a modular frontend and live deployment.",
    image: "./images/Grantify.png",
    github: "https://github.com/katukurijaswanth2/Scholarship-Finder.git",
    live: "https://scholarpath-gamma.vercel.app/"
  }
];

const backendProjects = [
  {
    title: "PriorityCare",
    description: "A Java backend hospital triage system that prioritizes patients by medical urgency using efficient data structures.",
    image: "./images/priorityQueue.png",
    github: "https://github.com/katukurijaswanth2/javaProjects.git",
    live: "https://github.com/katukurijaswanth2/javaProjects.git"
  },
  {
    title: "WorkForceHub",
    description: "A Spring Boot–based Employee Management REST API that enables secure CRUD operations, department-based search, and MySQL integration using a clean layered backend architecture.",
    image: "./images/WorkForceHub.png",
    github: "https://github.com/katukurijaswanth2/employee_management.git",
    live: "https://github.com/katukurijaswanth2/employee_management.git"
  }
];

const fullStackProjects = [
  {
    title: "Full Stack E-Commerce Application",
    description: "Complete e-commerce web application with Spring Boot REST APIs, JWT authentication, MySQL database, and responsive frontend.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/fullstack-ecommerce",
    live: "https://yourusername.github.io/fullstack-ecommerce"
  },
  {
    title: "Online Banking System",
    description: "Secure full stack banking application using Spring Boot, REST APIs, role-based authentication, and frontend dashboards.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/online-banking-system",
    live: "https://yourusername.github.io/online-banking-system"
  },
  {
    title: "Employee Management System",
    description: "Full stack employee management system with Spring Boot backend, CRUD REST APIs, MySQL database, and responsive frontend.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/employee-management-system",
    live: "https://yourusername.github.io/employee-management-system"
  },
  {
    title: "Task Management Application",
    description: "Task management web app with Spring Boot backend, JWT-based authentication, REST APIs, and dynamic frontend.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/task-management-app",
    live: "https://yourusername.github.io/task-management-app"
  },
  {
    title: "Student Management System",
    description: "Full stack student management system using Spring Boot, JPA, MySQL, and a responsive frontend.",
    image: "./images/jash.png",
    github: "https://github.com/yourusername/student-management-system",
    live: "https://yourusername.github.io/student-management-system"
  }
];

const projectsMap = {
  FrontEnd: frontendProjects,
  Backend: backendProjects,
  FullStack: fullStackProjects,
};

export const ProjectsList = ({ role = "FrontEnd" }) => {
  const projects = projectsMap[role] || [];

  const containerId =
    role === "FrontEnd"
      ? "project-lists"
      : role === "Backend"
      ? "javaBackend-projects"
      : "fullStackProjects";

  return (
    <div className="project-lists" id={containerId}>
      {projects.map((p, index) => (
        <div className="project-card" key={index}>
          <div className="project-image">
            <img src={p.image} alt={p.title} />
          </div>
          <div className="project-content">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={p.live} target="_blank" rel="noreferrer" className="live">View</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};