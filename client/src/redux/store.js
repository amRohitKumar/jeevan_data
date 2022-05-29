import { configureStore } from "@reduxjs/toolkit";
import {persistStore} from 'redux-persist';
import userReducer from '../redux/features/users/userSlice';
import logger from "redux-logger";

const middlewares = [];  

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: [...middlewares]
});

export const persistor = persistStore(store);