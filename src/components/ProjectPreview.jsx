import { Grid } from "@mui/material"
import { useTravel } from "../hooks/useTravel"

export const ProjectPreview = ( {title, technologies, description, images, width = '90%', height ='180px', size = 3}) => {
    
    const {navigateForward} = useTravel();
    let defaultWidth = width;
    let defaultHeight = height;

  return (
    <Grid item key={title}
        sx={{
            '&:hover': {
                cursor: 'pointer',
            },
        }}
        sm={size}
    >
        <img width={defaultWidth} height={defaultHeight} src={images[0]} alt={title} style={{border: "1px solid black"}}
            onClick= { () => (navigateForward(title)) }
        />
    </Grid>
  )
}
