import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingStatus } from '../constants';
import { getAllUsersRequest } from '../utils/api/user';
import { AllUsers, User } from '../utils/types';

export const getUsersAll = createAsyncThunk('user/getAll', async () => {
    const response = await getAllUsersRequest();
    return response;
});

const initialState = {
    data: [],
    status: LoadingStatus.none,
} as AllUsers;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAllUsers(state, action: PayloadAction<User[]>) {
            return { ...state, data: action.payload };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersAll.pending, (state) => {
            state.status = LoadingStatus.pending;
        }),
            builder.addCase(getUsersAll.rejected, (state) => {
                state.status = LoadingStatus.rejected;
            }),
            builder.addCase(getUsersAll.fulfilled, (state) => {
                state.status = LoadingStatus.fulfilled;
            });
    },
});

export const { getAllUsers } = userSlice.actions;

export default userSlice.reducer;
