import { useNavigate } from "react-router-dom";

export const useTravel = () => {

    const navigate = useNavigate();

    const navigateForward = (name) => {
        navigate(`/project/${name}`)
    }

    return {
        navigateForward
    }

}