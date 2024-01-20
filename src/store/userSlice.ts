import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LoadingStatus } from '../constants';
import { getUserRequest, GetUserRequestParams } from '../utils/api/user';
import { HttpResponse, IUser, StoreState } from '../utils/types';

export interface UserStore {
    user: StoreState<IUser>;
}

const initialState: UserStore = {
    user: {
        status: LoadingStatus.none,
        data: {},
    },
};

export const getUser = createAsyncThunk<HttpResponse<IUser>, GetUserRequestParams>('user/get', async (params) => {
    const response = await getUserRequest(params);
    return response;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.user.status = LoadingStatus.pending;
        }),
            builder.addCase(getUser.rejected, (state) => {
                state.user.status = LoadingStatus.rejected;
            }),
            builder.addCase(getUser.fulfilled, (state, action) => {
                state.user.status = LoadingStatus.fulfilled;

                if (action.payload) {
                    state.user.data = action.payload.data;
                }
            });
    },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
