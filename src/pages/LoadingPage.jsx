import { CircularProgress, Container, Grid } from "@mui/material"

export const LoadingPage = () => {
  
  return (
    <Container maxWidth='true' sx={{ backgroundColor: 'secondary.main' }}>
        <Grid container height='100vh' justifyContent="center" alignItems="center">
            <CircularProgress size={70} sx={{ color: 'primary.second'}} />
        </Grid>
    </Container>
  )
}
