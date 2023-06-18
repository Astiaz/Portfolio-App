import { useSelector } from "react-redux";

export const getProjectByName = ( title ) => {

    const { allProjects } = useSelector(state => state.project);
    
    const projectFinded = allProjects.find( project => project.title === title);

    return projectFinded;
}