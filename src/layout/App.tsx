import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ErrorCatch } from '../components/ErrorCatch';
import { store } from '../store';
import { AppLayout } from './AppLayout';
import { AppRoutes } from './AppRoutes';

export const App = () => {
    return (
        <ErrorCatch>
            <Provider store={store}>
                <BrowserRouter>
                    <AppLayout>
                        <AppRoutes />
                    </AppLayout>
                </BrowserRouter>
            </Provider>
        </ErrorCatch>
    );
};
