import { Grid, Typography } from "@mui/material"

export const Hero = () => {

    const windowWidth = window.innerWidth;
    let imageWidth = '100%';

    if(windowWidth > 900){
        imageWidth = '63%'
    }

    const HomeImage = 'https://res.cloudinary.com/moralduke-cloud/image/upload/v1690405250/Room4Trasparent_ikm0jo.png';


    return (
        <Grid container direction="row" alignItems='center' spacing={4}>
            <Grid container item xs={12} sm={6} direction="column" rowGap={1}>
                <Typography variant='h4' component='p' 
                    sx={{ 
                        marginBottom: {xs: 2, sm: 1}, 
                        textAlign:{ xs: "center", sm: "start"},
                    }}
                >
                    Welcome to my web!
                </Typography>
                <Typography variant="h3" component='p' 
                    sx={{
                        marginBottom: {xs: 2, sm: 1}, 
                        textAlign:{ xs: "center", sm: "start"},
                        fontSize: {xs: '28px', sm: '40px'}
                    }}
                >
                    My name is Alfonzo Morales and I'm a <Typography variant='inherit' component='span' color='primary.main'> 
                    Frontend React Developer
                    </Typography> 
                </Typography>
                <Typography variant="body1" component='span' sx={{ textAlign:{ xs: "center", sm: "start"} }}>
                    I'm a React Developer who loves to work with different technologies such as 
                    Redux, NodeJs, Material UI, Bootstrap, SASS among others, also I'm an
                    enthusiast of the 3D modeling and someone who likes purple 
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexGrow: 1, ml: { xs: "0", sm: "24"}}} alignItems='center' justifyContent='center'>
                <img width={imageWidth} src={ HomeImage } />
            </Grid>
        </Grid>
    )
}
