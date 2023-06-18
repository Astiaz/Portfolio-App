import { configureStore } from "@reduxjs/toolkit";
import { projectSlice } from "./project/projectSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        project: projectSlice.reducer
    }
})