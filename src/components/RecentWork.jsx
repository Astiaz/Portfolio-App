import { Link as RouterLink } from "react-router-dom";
import { Grid, Link, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { ProjectPreview } from "./ProjectPreview";

export const RecentWork = () => {


    const { allProjects } = useSelector( state => state.project);

    return (
        <Grid container direction="column">
            <Typography variant='h5' component='p' sx={{marginBottom: 2, textAlign:{ xs: "center", sm: "start"}}}>
                Recent Works
            </Typography>

            <Grid container direction='column'>
                <Grid item container className="animate__fadeInUp" spacing={2} xs={12} sm={8} sx={{marginBottom: 0, }}>
                {
                    allProjects.slice(-3).map( project => (
                        <ProjectPreview { ...project } key={project.title}/>
                    ))
                }

                </Grid>

                
                <Link component={RouterLink} to='/portfolio' sx={{ fontSize: {xs: '20px', sm: '12'} }}>
                    See more
                </Link>
            </Grid>
        </Grid>
    )
}
