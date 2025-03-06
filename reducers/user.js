import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { username: null, token: null, diet: null, bookmarks: [] },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.username = action.payload.username;
            state.value.token = action.payload.token;
            state.value.diet = null;
            state.value.bookmarks = [];
        },
        logout: (state) => {
            state.value.username = null;
            state.value.token = null;
            state.value.diet = null;
            state.value.bookmarks = [];
        },
        addDiet: (state, action) => {
            state.value.diet = action.payload
        },
        addBookmark: (state, action) => {
            state.value.bookmarks.push(action.payload);
        },
        removeBookmark: (state, action) => {
            state.value.bookmarks = state.value.bookmarks.filter(bookmark => bookmark != action.payload);
        },
        importBookmarks: (state, action) => {
            state.value.bookmarks = action.payload;
        }
    }
})

export const { login, logout, addDiet, addBookmark, removeBookmark, importBookmarks } = userSlice.actions;
export default userSlice.reducer;