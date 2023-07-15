import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

url = "https://localhost:3000/api/v1/greetings"

export const getMassages = createAsyncThunk('masseges/slice', async () => {
    const response = await fetch(url);
    const data = await response.json();
    data;
})

const initialState = {
    massages: [],
    isLoading: false,
}

const massageSlice = createSlice({
    name: 'massageStore',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMassages.pending, (state) => ({
            ...state,
            isLoading: true,
        }))
        builder.addCase(getMassages.fulfilled, (state, action) => ({
            ...state,
            massages: action.payload,
            isLoading: false,
        }))
        builder.addCase(getMassages.rejected, (state) => ({
            ...state,
            isLoading: false,
        }))
    }
})