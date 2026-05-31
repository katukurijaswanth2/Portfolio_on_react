import { RoleBox } from "../../common/RoleBox"
import { ProjectsList } from "../projects/Projectslist"
import { ProjectsSection } from "../projects/ProjectsSection"


export const Backend=()=>{
    return(
        <>
        <RoleBox title="Back End" description="My backend portfolio showcasing Java and Spring Boot applications, RESTful APIs, secure authentication, and efficient database interactions"/>
       
      <ProjectsSection role="Backend" />
      <ProjectsList role="Backend" />
       </>
    )
 
}