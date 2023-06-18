import { Grid, Modal } from '@mui/material';
import { useModal } from '../hooks/useModal';


export const Gallery = (images) => {

    const {image} = images;
    let defaultWidth = '100%';
    let defaultHeight = '230px';

    const width = window.innerWidth;

    if(width < 600){
        defaultWidth = '100%';
        defaultHeight = '230';
    } else if( width < 900){

    } else if(width < 1200){

    } else {
        if(image.length < 4){
            defaultWidth = '500';
            defaultHeight = '300';
        }
    }

    const { img, open, handleClose, handleOpen} = useModal();
        
    return (
        <Grid container item mb={{xs: 2, sm: 4}} xs={12} rowGap={2} columnGap={2} justifyContent='center'>

            {
                image.map( image => (
                    <Grid item xs={12} sm={3.8} sx={{border: "1px solid gray"}} key={image}>
                        <img src={ image } width={defaultWidth} height={defaultHeight} onClick={() => handleOpen(image)}/>
                    </Grid>
                ))
            }

            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none'
                }}
            >
                <img src={img} alt={img} style={{ maxHeight: '80%', maxWidth: '80%' }}/>
            </Modal>
        </Grid>
    )
}
