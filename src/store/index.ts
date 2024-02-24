import { configureStore } from '@reduxjs/toolkit';

import affirmationEditReducer from './affirmationEditSlice';
import affirmationReducer from './affirmationSlice';
import authReducer from './authSlice';
import currentUserReducer from './currentUserSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        affirmation: affirmationReducer,
        currentUser: currentUserReducer,
        auth: authReducer,
        affirmationEdit: affirmationEditReducer,
    },
});
