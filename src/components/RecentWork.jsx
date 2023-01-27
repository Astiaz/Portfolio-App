import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, Link, Typography } from "@mui/material";

import { projects } from "../data/projects";
import { useTravel } from "../hooks/useTravel";

export const RecentWork = () => {

    const { navigateForward } = useTravel()

    return (
        <Grid container>
            <Typography variant='h5' component='p' sx={{marginBottom: 1}}>
                Recent Work
            </Typography>

            <Grid container direction='column'>
                <Grid item container spacing={0} xs={8} sx={{marginBottom: 0}}>
                {
                    projects.slice(0, 3).map( proyect => (
                        <Grid item xs={2} mr={6} key={proyect.id}>
                            <img width='250' height='160' src={ `../../assets/${proyect.img}.png` } 
                                onClick= { () => (navigateForward(proyect.name)) }
                            />
                        </Grid>
                    ))
                }

                </Grid>

                
                <Link component={RouterLink} to='/portfolio'>
                    See more
                </Link>
            </Grid>
        </Grid>
    )
}
