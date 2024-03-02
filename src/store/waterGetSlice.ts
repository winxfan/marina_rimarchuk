import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { waterGet } from '@/utils/api/water';
import { WaterData } from '@/utils/types/water';

import { LoadingStatus } from '../constants';
import { UserError } from '../utils/types';

export const getWater = createAsyncThunk('waterGet/getWater', async (_, { rejectWithValue }) => {
    try {
        return await waterGet();
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const initialState: WaterData = {
    data: 0,
    status: LoadingStatus.none,
    error: LoadingStatus.none,
};

const waterGetSlice = createSlice({
    name: 'waterGet',
    initialState,
    reducers: {
        waterData(state, action) {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getWater.pending, (state) => {
            state.status = LoadingStatus.pending;
            state.error = null;
        });
        builder.addCase(getWater.fulfilled, (state, action) => {
            state.status = LoadingStatus.fulfilled;
            state.data = action.payload.data;
        });
        builder.addCase(getWater.rejected, (state, action) => {
            state.status = LoadingStatus.rejected;
            state.error = (action.payload as UserError).status;
        });
    },
});

export const { waterData } = waterGetSlice.actions;

export default waterGetSlice.reducer;
