import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { projectSlice } from "./project/projectSlice";
import { authSlice } from "./auth/authSlice";

const persistConfig = {
    key: 'proyectos',
    storage,
    whitelist: ['project']
}

const appReducer = combineReducers({
    auth: authSlice.reducer,
    project: projectSlice.reducer,
})

const persistProjectReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
    reducer: persistProjectReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
})

export default store;