import { PortfolioLayout } from "../layout/PortfolioLayout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../hooks/useAuthStore";


const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}

export const LoginPage = () => {

    const { startLogin } = useAuthStore();

    const { loginEmail, 
            loginPassword, 
            formState,
            onInputChange 
    } = useForm(loginFormFields);

    const onLoginSubmit = (event) => {

        event.preventDefault();

        startLogin({email: loginEmail, password: loginPassword})
    }

    return (
        <PortfolioLayout>

                <form onSubmit={onLoginSubmit}>
                    <Grid item container direction="column" height="80vh" justifyContent="center" alignItems="center">
                        <Typography variant="h4" component="span">Login Page</Typography>

                        <Grid container direction="column" sm={6} rowGap={2}>
                            <TextField
                                type="email"
                                label='loginEmail' 
                                name="loginEmail" 
                                value={loginEmail} 
                                onChange={onInputChange} 
                                variant='outlined' 
                                margin="dense"
                            />
                            <TextField 
                                type="password"
                                label='loginPassword' 
                                name="loginPassword" 
                                value={loginPassword} 
                                onChange={onInputChange} 
                                variant='outlined'
                            />
                            <Button 
                                variant='contained' 
                                sx={{backgroundColor: 'primary.second', marginTop: 2}} 
                                size='small'
                                type="submit"
                            >Submit</Button>
                        </Grid>
                    </Grid>
                </form>

        </PortfolioLayout>
    )
}
