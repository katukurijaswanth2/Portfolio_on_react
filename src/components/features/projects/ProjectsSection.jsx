import "./ProjectsSection.css";

export const ProjectsSection = ({ role = "FrontEnd" }) => {
  return (
    <div className="projects">
      <span className="f-role">{role}</span>
      <span className="project">projects!</span>
    </div>
  );
};

