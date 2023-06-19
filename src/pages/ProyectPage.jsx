import { useParams } from "react-router-dom";

import { Grid, Link, Typography } from "@mui/material";

import { Gallery } from "../components";
import { PortfolioLayout } from "../layout/PortfolioLayout";
import { getProjectByName } from "../helpers/getProjectByName";


export const ProyectPage = () => {

    const { title } = useParams();

    const project =  getProjectByName(title);
    const { title: projectTitle, images, repository, description, technologies  } = project;

    return (
        <PortfolioLayout>
            <Grid container direction='column' pl={{ xs: 0, sm: 4 }} pt={2} sx={{minHeight: `calc(100vh - 115px)`, paddingLeft: 4}}>
                <Grid container>
                    <Typography variant='h4' component='p' mb={2} color="secondary">{ projectTitle }</Typography>
                    <Gallery image={images} />
                </Grid>
                <Grid item container xs={12} direction='row' rowGap={2} justifyContent="space-between">
                    <Grid item container xs={12} sm={5} direction='column'>
                        <Typography variant='h6' component='p' mb={1}>About this project</Typography>
                        <Typography>
                            { description }
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} sm={5} direction='column' rowGap={2} ml={{xs: 0, sm: 8}}>
                        <Grid container>
                            <Typography variant='h6' component='p' mb={1}>Technologies</Typography>
                            <Grid container direction='row'>
                                {
                                    technologies.map( tech => (
                                            <Typography key={tech} variant="h5" mr={2} color="secondary">
                                                {tech}
                                            </Typography> 
                                    ))
                                }
                            </Grid>

                        </Grid>
                        <Link href={repository} target="_blank" sx={{ fontSize: {xs: '20px', sm: '12'} }}>
                            <Typography variant='body1' color="secondary" component='p' mb={1}>View project</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </PortfolioLayout>
    )
}
