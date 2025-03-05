import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { username: null, token: null, diet: null },
  }; 

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.username = action.payload.username;
            state.value.token = action.payload.token;
            state.value.diet = null;
        },
        logout: (state) => {
            state.value.username = null;
            state.value.token = null;
            state.value.diet = null;
        },
        addDiet: (state, action) => {
            state.value.diet = action.payload
        }
    }
})

export const { login, logout, addDiet } = userSlice.actions;
export default userSlice.reducer;