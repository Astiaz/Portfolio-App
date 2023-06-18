import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { Grid, Link, Typography } from "@mui/material";
import { PortfolioLayout } from "../layout/PortfolioLayout";
import { ProjectPreview } from "../components/ProjectPreview";

export const PortfolioPage = () => {

  const { allProjects } = useSelector(state => state.project);

  return (
    <PortfolioLayout>
        <Grid
            container
            spacing={0}
            direction="column"
            rowGap={{xs: 0, sm: 8}}
            sx={{
              minHeight: `calc(100vh - 120px)`,
              paddingLeft: {sx: 0, sm: 4}
            }}
        >
          <Grid>
            <Typography variant='h5' component='p' mb={2}
              sx={{
                textAlign: {xs: 'center', sm: 'start'},
                mt: {xs: 2, sm: 4}
              }} 
            >
              Recent Works
            </Typography>

            <Grid container spacing={{xs: 0,sm: 4}} rowGap={2} pt={2}>
              {
                allProjects.map( project => (
                  <Grid item xs={12} sm={4} key={project.title}>
                    <ProjectPreview { ...project } key={project.title} />
                  </Grid>
                ))
              }
            </Grid>
          </Grid>

          <Typography variant='h5' component='p' mt={4} sx={{textAlign: {xs: "center", sm: "start"}}}>
            Do u like my work? <Link color='primary.main' component={ RouterLink } to='/contact'>Contact me!</Link>
          </Typography>
        </Grid>
    </PortfolioLayout>
  )
}


