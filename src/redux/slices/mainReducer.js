import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        text: ""
    },
    reducers: {}
});

export default mainSlice.reducer;