import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

const drawerWidth = 200;

export const PortfolioLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <NavBar drawerWidth={ drawerWidth }/>
        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={{ flexGrow:1, p: {xs: 2, sm: 3}}}
            width={{xs: '100vw'}}
            // height={{sm: '100%'}}
        >
            <Toolbar sx={{ height: {xs: '8rem', sm: '1rem'}}}/>

            {children}
        </Box>
    </Box>
  )
}
