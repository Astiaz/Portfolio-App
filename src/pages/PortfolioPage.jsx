import { Link as RouterLink } from "react-router-dom";
import { Grid, Link, Typography } from "@mui/material";
import { PortfolioLayout } from "../layout/PortfolioLayout";
import { projects } from "../data/projects";
import { useTravel } from "../hooks/useTravel";

export const PortfolioPage = () => {

  const { navigateForward } = useTravel()

  return (
    <PortfolioLayout>
        <Grid
            container
            spacing={0}
            direction="column"
            // justifyContent="center"
            sx={{minHeight: `calc(100vh - 130px)`, paddingLeft: 4}}
        >
          <Typography variant='h5' component='p' mb={2} mt={4} >Recent Work</Typography>

          <Grid container spacing={2} rowGap={4} pt={2}>
            {
              projects.map( proyect => (
                <Grid item xs={4} key={proyect.id}>
                  <img width='260' height='180' src={`../../assets/${proyect.img}.png`} alt={proyect.name}
                    onClick= { () => (navigateForward(proyect.name)) }
                  />
                </Grid>
              ))
            }
          </Grid>

          <Typography variant='h5' component='p' mt={6}>
            Do u like my work? <Link color='primary.main' component={ RouterLink } to='/contact'>Contact me!</Link>
          </Typography>
        </Grid>
    </PortfolioLayout>
  )
}


