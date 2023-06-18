import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import portfolioAPI from "../api/portfolioAPI";

export const useAuthStore = () => {

    const { status, user } = useSelector( state => state.auth)
    const dispatch = useDispatch();
  
    const startLogin = async({email, password}) => {
        dispatch(onChecking());

        try {

            const {data} = await portfolioAPI.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.id}));

        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10)
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch(onLogout());

        try {
            const { data } = await portfolioAPI.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }
  
    return {
        // Methods
        startLogin,
        checkAuthToken,
        
        // Properties
        status,
        user
    }
}
