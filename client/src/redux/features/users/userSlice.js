import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    photo: null,
    id: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.id = action.payload.id;
        },
        signOutState: state => {
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
});

export const {setUserLoginDetails, signOutState} = userSlice.actions;

export const selectUser = state => state.user;
export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;