import { Link as RouterLink, NavLink } from "react-router-dom";
import { AppBar, Box, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useAuthStore } from "../hooks/useAuthStore";

export const NavBar = ({drawerWidth = 240}) => {

    const { status } = useAuthStore();

  return (
    <AppBar position="fixed"
        sx={{
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            // maxWidth: {xs: '100vw'},
            left: 0,
            ml: {xs: 0 ,sm: `${drawerWidth}px`},
            backgroundColor: {xs: 'black', sm: 'secondary.second'},
            paddingTop: 2,
        }}

        elevation={0}
    >
        <Toolbar>
            <Box sx={{display:'flex', flexGrow: 1, paddingLeft: 0}} justifyContent='space-between'>
                <Grid container direction='row' alignItems='center' spacing={4} 
                    sx={{ 
                        paddingLeft: {xs: 0, sm: 4},
                        marginBottom: {xs: 2, sm: 0}
                    }}
                >
                    <Grid container item direction='row' columnGap={{xs: 4, sm: 3}}
                        sx={{
                            fontSize: 20,
                            justifyContent: {xs: 'center', sm: 'start'},
                        }}
                    >
                        <Grid container justifyContent="center" mb={1} sx={{xs:12 ,display: { sm: 'none'}}}>
                            <Typography variant="h4" component="span" color="primary.second">Moralduke</Typography>
                        </Grid>

                        <Link component={ NavLink } underline='none' to='/'
                            sx={{
                                color: {xs: 'white' , sm: 'tertiary.main'},
                                '&:hover':{color:'primary.second'}, 
                                '&.active':{
                                    color:'primary.main',
                                },
                            }} 
                        >
                            Home
                        </Link>

                        <Link component={ NavLink } underline='none' to='/portfolio'
                            sx={{
                                color: {xs: 'white' , sm: 'tertiary.main'},
                                '&:hover':{color:'primary.second'}, 
                                '&.active':{
                                    color:'primary.main',
                                },
                            }} 
                        >
                            Portfolio
                        </Link>
                        
                        {/* <Link sx={{mr: 2}} color='tertiary.main' component={ NavLink } underline='none' to='/about'>
                            About Me
                        </Link> */}
                        
                        <Link component={ NavLink } underline='none' to='/login'
                            sx={{
                                color: {xs: 'white' , sm: 'tertiary.main'},
                                '&:hover':{color:'primary.second'}, 
                                '&.active':{
                                    color:'primary.main',
                                },
                            }} 
                        >
                            Contact
                        </Link>
                        
                        {
                            (status === 'authenticated')
                            ? (
                                <Link color='tertiary.main' component={ NavLink } underline='none' to='/upload'
                                        sx={{
                                            color: {xs: 'white' , sm: 'tertiary.main'},
                                            '&:hover':{color:'primary.second'}, 
                                            '&.active':{
                                                color:'primary.main',
                                            },
                                        }}
                                        
                                    >
                                        Upload
                                    </Link>
                                )

                                : <> </>
                        }
                        
                    </Grid>
                </Grid>
                
                <Grid item alignItems='center' sx={{ display: { xs: "none", sm: "block" }, paddingRight: 4 }}>
                    <Button variant="contained" sx={{ backgroundColor: `primary.second`}} startIcon={ <Download /> } >
                        <Typography sx={{ ml:1, width: {sm: `120px`}}}>Download CV</Typography>
                    </Button>
                </Grid>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
