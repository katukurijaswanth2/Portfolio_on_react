import { RoleBox } from "../../common/RoleBox";
import { ProjectsList } from "../projects/Projectslist";
import { ProjectsSection } from "../projects/ProjectsSection";

export const FullStack = () => {
    return (
        <>
            <RoleBox
                title="Full Stack"
                description="My full stack Java portfolio showcases end-to-end web application development using Java and Spring Boot on the backend, with modern frontend technologies. It highlights RESTful APIs, secure authentication, efficient database interactions, and responsive user interfaces, delivering scalable and user-focused solution"
            />
            <ProjectsSection role="FullStack" />
            <ProjectsList role="FullStack" />
        </>
    );
};
