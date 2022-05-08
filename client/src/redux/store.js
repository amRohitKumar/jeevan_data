import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/features/users/userSlice';
import logger from "redux-logger";

const middlewares = [];  

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: [...middlewares]
});