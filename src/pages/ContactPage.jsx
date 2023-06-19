import { useRef } from "react";

import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"

import sendEmail from "../helpers/sendEmail";
import Swal from "sweetalert2";

export const ContactPage = () => {
  
  const form = useRef();

  const onSendEmail = (e) => {
    e.preventDefault();

    sendEmail(form.current);
    Swal.fire('Email Send', `Thanks for your email, I'm gonna contact you as soon as possible`, 'success');
  };

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
            <form ref={form} onSubmit={onSendEmail}>
              <Grid container direction="column">
                <TextField label='Name' name="user_name" variant='outlined' margin="dense"/>
                <TextField label='Email' name="user_email" variant='outlined' margin="dense"/>
                <TextField label='Message' name="message" variant='outlined' multiline rows={4} margin="dense"/>
                <Button type="submit" variant='contained' sx={{backgroundColor: 'primary.second', marginTop: 2}} size='small'>Submit</Button>
              </Grid>
            </form>
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
