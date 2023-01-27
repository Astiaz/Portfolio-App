import { useParams } from "react-router-dom";

import { Grid, IconButton, Typography } from "@mui/material";
import { Alarm } from "@mui/icons-material";

import { PortfolioLayout } from "../layout/PortfolioLayout";
import { Gallery } from "../components";
import { getProjectByName } from "../helpers/getProjectByName";


export const ProyectPage = () => {

    const { name } = useParams();

    const project =  getProjectByName(name);
    const { img , id, description, technologies  } = project;

    const proyectImg = `../../assets/${img}.png`

    return (
        <PortfolioLayout>
            <Grid container direction='column' pl={4} pt={2}>
                <Typography variant='h5' component='p' mb={2}>{ name }</Typography>
                <Gallery />

                <Grid item container xs={12} direction='row'>
                    <Grid item container xs={5}>
                        <Typography variant='h6' component='p' mb={1}>About this project</Typography>
                        <Typography>
                            { description }
                        </Typography>
                    </Grid>
                    <Grid item container xs={6} direction='column' ml={8}>
                        <Typography variant='h6' component='p' mb={1}>Technologies</Typography>
                        <Grid container direction='row'>
                            {
                                technologies.map( tech => (
                                    <IconButton key={tech} color="secondary" aria-label="add an alarm" size='large'>
                                        <Alarm />
                                    </IconButton>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PortfolioLayout>
    )
}
