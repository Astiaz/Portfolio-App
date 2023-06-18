import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"
import { useForm } from "../hooks/useForm";
import { useProjectStore } from "../hooks/useProjectStore";


const formProject = {
    title: '',
    description: '',
    repository: '',
    rawTechnologies: ''
}

export const UploadPage = () => {

    const { startUploading, startUploadingFiles, startNewProject, isSaving} = useProjectStore();

    const { completeMessage, errorMessage } = useSelector(state => state.project); 

    const { title, 
            description,
            repository,
            rawTechnologies, 
            formState,
            onInputChange 
    } = useForm(formProject);

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;
        startUploadingFiles(target.files);
    }

    useEffect(() => {
        startNewProject(formState);
    }, [formState])

    useEffect(() => {
        if(completeMessage.length > 0){
            Swal.fire('Proyecto subido', completeMessage, 'success');
        }
    }, [completeMessage])
    

  return (
    <PortfolioLayout>
        <Grid container justifyContent="center" alignItems="center" height="80vh">

            <Grid item container direction='column' sm={8}>
                <Typography variant="h4" component="p" mb={4}>Upload project</Typography>
                <TextField 
                    label='Title' 
                    name="title" 
                    value={title} 
                    onChange={onInputChange} 
                    variant='outlined' 
                    margin="dense"
                />
                <TextField 
                    label='Technologies' 
                    name="rawTechnologies" 
                    value={rawTechnologies} 
                    onChange={onInputChange} 
                    variant='outlined' 
                    margin="dense"
                />
                <TextField 
                    label='Repository' 
                    name="repository" 
                    value={repository} 
                    onChange={onInputChange} 
                    variant='outlined' 
                    margin="dense"
                />
                <TextField 
                    label='Description' 
                    name="description" 
                    value={description} 
                    onChange={onInputChange} 
                    variant='outlined' 
                    multiline rows={4} margin="dense"
                />
                <Typography variant="subtitle1" component="span">Images:</Typography>
                <input 
                    type="file" 
                    multiple 
                    onChange={onFileInputChange}
                />

                <Button 
                    variant='contained' 
                    sx={{backgroundColor: 'primary.second', marginTop: 2}} 
                    size='small'
                    disabled = {isSaving}
                    onClick={() => {
                        startUploading()
                    }}
                >Submit</Button>
            </Grid>
        </Grid>

    </PortfolioLayout>
  )
}
