import { Grid } from "@mui/material"
import { useTravel } from "../hooks/useTravel"

export const ProjectPreview = ( {title, technologies, description, images}) => {

    const {navigateForward} = useTravel();

  return (
    <Grid item key={title}
        sx={{
            '&:hover': {
                cursor: 'pointer',
            },
        }}
    >
        <img width='100%' height='230' src={images[0]} alt={title} style={{border: "1px solid black"}}
            onClick= { () => (navigateForward(title)) }
        />
    </Grid>
  )
}
