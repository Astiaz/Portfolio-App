import { Grid } from "@mui/material"
import { Hero } from "../components"
import { RecentWork } from "../components/RecentWork"
import { PortfolioLayout } from "../layout/PortfolioLayout"


export const HomePage = () => {
  return (
    <PortfolioLayout>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            sx={{
              minHeight: `calc(100vh - 130px)`, 
              backgroundColor: 'secondary.second', 
              borderRadius: 3, 
              paddingLeft: {xs: 0, sm: 4}
            }}
        >
          
          <Hero />
          <RecentWork />

        </Grid>
    </PortfolioLayout>
  )
}
