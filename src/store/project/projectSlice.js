
import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
   name: 'project',
   initialState: {
       isSaving: false,
       allProjects: [],
       errorMessage: '',
       completeMessage: '',
       project: null,
    //    project: {
    //         name: '',
    //         description: '',
    //         repository: '',  
    //         technologies: [],
    //         images: [],
    //    }

   },
   reducers: {
      setIsSaving: (state, /* action */ ) => {
         state.isSaving = true;
      },
      setProject: (state, { payload }) => {
         state.project = payload;
      },
      setAllProjects: (state, {payload}) => { 
         state.allProjects = payload;
      },
      setImagesToProject: (state, { payload }) => {
         state.project.images = [...state.project.images, ...payload];
         state.isSaving = false;
      },
      clearProject: (state, {payload}) => {
         state.isSaving = false;
         state.project = null;
         state.errorMessage = '';
         state.completeMessage = '';
      },
      setErrorMessage: (state, {payload}) =>{ 
         state.errorMessage = payload;
         state.isSaving = false;
      },
      setCompleteMessage: (state, {payload}) =>{ 
         state.completeMessage = payload;
         state.isSaving = false;
      },

   }
});


// Action creators are generated for each case reducer function
export const { setAllProjects, setErrorMessage, setCompleteMessage, setIsSaving, setProject, clearProject, setImagesToProject } = projectSlice.actions;