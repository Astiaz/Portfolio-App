import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, Grid, Link, Toolbar, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";

export const NavBar = ({drawerWidth = 240}) => {

  return (
    <AppBar position="fixed"
        sx={{
            width: {sm: `calc(100% - ${ drawerWidth }px)`},
            ml: {sm: `${drawerWidth}px`},
            backgroundColor: 'secondary.second',
            paddingTop: 2,
        }}

        elevation={0}
    >
        <Toolbar>
            <Box sx={{display:'flex', flexGrow: 1}} justifyContent='space-between'>
                <Grid container direction='row' alignItems='center' spacing={4} sx={{paddingLeft: 4}}>
                    <Grid item >
                        <Link sx={{mr: 2}} color='tertiary.main' component={ RouterLink } underline='none' to='/'>
                            Home
                        </Link>

                        <Link sx={{mr: 2}} color='tertiary.main' component={ RouterLink } underline='none' to='/portfolio'>
                            Portfolio
                        </Link>
                        
                        {/* <Link sx={{mr: 2}} color='tertiary.main' component={ RouterLink } underline='none' to='/about'>
                            About Me
                        </Link> */}
                        
                        <Link sx={{mr: 2}} color='tertiary.main' component={ RouterLink } underline='none' to='/contact'>
                            Contact
                        </Link>
                    </Grid>
                </Grid>
                
                <Grid item alignItems='center' sx={{paddingRight: 4}}>
                    <Button variant="contained" sx={{ backgroundColor: `primary.second`}} startIcon={ <Download /> } >
                        <Typography sx={{ ml:1, width: {sm: `120px`}}}>Download CV</Typography>
                    </Button>
                </Grid>
            </Box>
        </Toolbar>
    </AppBar>
  )
}
