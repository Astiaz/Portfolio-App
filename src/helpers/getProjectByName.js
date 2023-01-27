import { projects } from "../data/projects";

export const getProjectByName = ( name ) => {
        
    return projects.find( project => project.name === name);
}