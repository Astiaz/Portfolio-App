import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"

export const ContactPage = () => {
  return (
    <PortfolioLayout>
        <Grid container
          direction='row'
          alignItems='center'
          justifyContent='space-around'
          sx={{
            minHeight: `calc(100vh - 140px)`,
            mt: { xs: 0, sm: 0}
          }}
        >
          <Grid item xs={12} sm={5} container direction='column'>
            <Typography variant='h5' component='p' mb={2}>Do u like my work? <Typography variant='p' component='span' color='primary.main'>contact me!</Typography></Typography>
            <TextField label='Name' variant='outlined' margin="dense"/>
            <TextField label='Email' variant='outlined' margin="dense"/>
            <TextField label='Message' variant='outlined' multiline rows={4} margin="dense"/>

            <Button variant='contained' sx={{backgroundColor: 'primary.second', marginTop: 2}} size='small'>Submit</Button>
          </Grid>

          <Box
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 400,
              height: 250,
              borderTopRightRadius: 48
            }}
            bgcolor='#111111'
            color='white'
          >
            <Typography variant='h5' component='p' mb={2}>You can also download my CV</Typography>
            <Button variant='contained' sx={{marginTop: 2}} size='medium'>Download CV</Button>
          </Box>
        </Grid>
    </PortfolioLayout>
  )
}
