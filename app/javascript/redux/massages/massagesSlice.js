import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = "http://localhost:3000/api/v1/greetings"

export const getMassages = createAsyncThunk('masseges/slice', async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data;
})

const initialState = {
    massages: '',
    isLoading: false,
}

const massageSlice = createSlice({
    name: 'massageStore',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMassages.pending, (state) => ({
            ...state,
            isLoading: true,
        }));
        builder.addCase(getMassages.rejected, (state) => ({
            ...state,
            isLoading: false,
        }))
        builder.addCase(getMassages.fulfilled, (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                massages: action.payload || [],
                isLoading: false,
            }
        });
    }
})

export default massageSlice.reducer;