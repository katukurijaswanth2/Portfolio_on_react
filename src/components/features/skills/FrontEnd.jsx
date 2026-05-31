import { RoleBox } from "../../common/RoleBox";
import { ProjectsList } from "../projects/Projectslist";
import { ProjectsSection } from "../projects/ProjectsSection";

export const FrontEnd = () => {
  return (
    <>
      <RoleBox
        title="Front End"
        description="My frontend portfolio highlighting modern UI, responsive layouts, and interactive web experiences."
      />
      <ProjectsSection role="FrontEnd" />
      <ProjectsList role="FrontEnd" />
    </>
  );
};
