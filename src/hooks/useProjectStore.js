import { useDispatch, useSelector } from "react-redux"
import portfolioAPI from "../api/portfolioAPI";
import { fileUpload } from "../helpers/fileUpload";
import { setIsSaving, setAllProjects, setCompleteMessage, setErrorMessage, setImagesToProject, setProject } from "../store/project/projectSlice";


export const useProjectStore = () => {

    const dispatch = useDispatch();
    const { user } = useSelector( state => state.auth);
    const { project, isSaving} = useSelector( state => state.project);

    const startGettingProjects = async() => {
        try {
            const { data } = await portfolioAPI.get('projects/');
            const projects = data.Projects;
            dispatch(setAllProjects(projects));
            // console.log(projects);
        } catch (error) {
            console.log(error);
        }
    }

    const startNewProject = (formState) => {
        const {description, rawTechnologies, title, repository} = formState;
        const newProject = {
            title,
            description,
            repository,
            rawTechnologies,
            images: [],
            uid: '',
        }

        dispatch(setProject(newProject));
    }

    const startUploading = async() => {
        
        dispatch(setIsSaving());

        const { title, description, rawTechnologies, images, repository } = project;
        const { uid } = user;

        const technologies = rawTechnologies.split(' ');
        
        const newProject = { title, description, technologies, repository, images, uid };

        try {
            const { data } = await portfolioAPI.post('projects/', newProject);
            dispatch(setCompleteMessage('Proyecto guardado exitosamente'));
            console.log(data);
        } catch (error) {
            console.log(error);
            dispatch(setErrorMessage('El proyecto no pudo ser subido'));
        }
    }

    const startUploadingFiles = async(files = []) => {

        dispatch(setIsSaving());

        const fileUploadPromises = [];

        try {
            for (const file of files) {
                fileUploadPromises.push(fileUpload(file));
            }

            const photoURL = await Promise.all(fileUploadPromises);
            dispatch(setImagesToProject(photoURL));
        } catch (error) {
            console.log(error);
        }
    }

    return {
        // Properties
        isSaving,
        
        // Methods
        startNewProject,
        startUploading,
        startUploadingFiles,
        startGettingProjects,
    }
}
