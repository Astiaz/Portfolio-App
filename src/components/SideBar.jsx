import { Link as RouterLink } from "react-router-dom";
import { Box, Drawer, Grid, IconButton, Link, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
        component='nav'
        sx={{ 
          display: { xs: "none", sm: "block" }, 
          width: {sm: drawerWidth}, 
          flexShrink: { sm: 0 }, 
          backgroundColor: 'primary'
        }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'tertiary.main'},
            }}
        >
            <Grid container 
                  direction='column' 
                  alignItems='center' 
                  sx={{display: 'flex', flexGrow: 1, paddingBottom: 4, paddingTop: 4}}
                  justifyContent='space-between'
            > 
              <Grid item>
                <Link component={ RouterLink } underline='none' to='/' color='white'>
                    <Typography variant="h4" noWrap component='div' sx={{ writingMode: 'vertical-lr' }}>
                        Moralduke
                    </Typography>
                </Link>
              </Grid>
              
              <Grid container direction='column' 
                sx={{flexGrow: 0.1, display: 'flex', width: `50px`}}
                justifyContent='space-between'
              >
                <Link href='https://github.com/Astiaz' target='_blank' rel='noopener'>
                  <IconButton color="primary" >
                      <GitHub fontSize="large"/> 
                  </IconButton>
                </Link>
                <Link href='https://www.linkedin.com/in/moralduke/' target='_blank' rel='noopener'>
                  <IconButton color="primary" >
                    <LinkedIn fontSize="large"/>  
                  </IconButton>
                </Link>
                <IconButton color="primary">
                  <Instagram fontSize="large"/>  
                </IconButton>
                <IconButton color="primary">
                  <Twitter fontSize="large"/>  
                </IconButton>
              </Grid>
            </Grid>
        </Drawer>
    </Box>
  )
}
