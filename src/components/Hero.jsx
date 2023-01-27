import { Grid, Typography } from "@mui/material"
import HomeImage from '../../assets/homeImage.png';

export const Hero = () => {
    return (
        <Grid container direction="row" alignItems='center' spacing={4}>
            <Grid item xs={6}>
                <Typography variant='h5' component='p' sx={{marginBottom: 1}}>
                    Bienvenido a mí web!
                </Typography>
                <Typography variant="h4" component='p' sx={{marginBottom: 1}}>
                    Mí nombre es Alfonzo Morales soy un <Typography variant='inherit' component='span' color='primary.main'> 
                    Frontend Developer
                    </Typography> y aficionado por el diseño 3D 
                </Typography>
                <Typography variant="body2" component='span'>
                    Duis irure culpa nisi aliquip dolor commodo incididunt. 
                    Velit excepteur amet sint sunt. Irure irure proident ad veniam. 
                    Proident sit laborum aliqua velit ea esse magna excepteur nostrud enim.
                </Typography>
            </Grid>

            <Grid item xs={6} sx={{ display: 'flex', flexGrow: 1}} alignItems='center' justifyContent='center'>
                <img src={ HomeImage } height='430px'/>
            </Grid>
        </Grid>
    )
}
