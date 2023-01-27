import { Grid, Modal } from '@mui/material';

import Prueba1 from '../../assets/prueba3.png';
import Prueba2 from '../../assets/prueba2.png';
import { useModal } from '../hooks/useModal';


export const Gallery = () => {
    
  const { img, open, handleClose, handleOpen} = useModal();
    
  return (
    <Grid item container mb={4} xs={12} justifyContent='center'>
        <Grid item xs={4}>
            <img src={ Prueba1 } width='300' height='200' onClick={() => handleOpen(Prueba1)}/>
        </Grid>
        <Grid item xs={4}>
            <img src={ Prueba2 } width='300' height='200' onClick={() => handleOpen(Prueba2)}/>
        </Grid>
        <Grid item xs={4}>
            <img src={ Prueba1 } width='300' height='200' onClick={() => handleOpen(Prueba1)}/>
        </Grid>
        <Grid item xs={4}>
            <img src={ Prueba2 } width='300' height='200' onClick={() => handleOpen(Prueba2)}/>
        </Grid>
        <Grid item xs={4}>
            <img src={ Prueba1 } width='300' height='200' onClick={() => handleOpen(Prueba1)}/>
        </Grid>
        <Grid item xs={4}>
            <img src={ Prueba2 } width='300' height='200' onClick={() => handleOpen(Prueba2)}/>
        </Grid>

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
