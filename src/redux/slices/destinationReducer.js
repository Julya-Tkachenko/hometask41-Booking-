import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDestinations = createAsyncThunk('destination/fetchDestinations', async () => {
    const resp = await fetch('./static/db.json');
    return await resp.json();
});

const destinationSlice = createSlice({
    name: 'destinations',
    initialState: {
        list: [],
        selectedDestination: null,
        isLoading: false
    },
    reducers: {
       setDestination: (prevState, {payload}) => {
        prevState.selectedDestination = payload;
       }
    },
    extraReducers: builder => {
        builder.addCase(fetchDestinations.pending, (prevState) => {
            prevState.isLoading = true;
        });
        builder.addCase(fetchDestinations.fulfilled, (prevState, {payload}) => {
            prevState.list = payload.destination;
            prevState.isLoading = false;
        });
    }
});

export const { setDestination} = destinationSlice.actions;
export default destinationSlice.reducer;