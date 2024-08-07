import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { useTelegram, useTelegramWebviewProxy } from '@/utils/hooks/useTelegram'

import { ErrorCatch } from '../components/ErrorCatch'
import { store } from '../store'
import { router } from './AppRoutes'

export const App = () => {
    const { expand, enableClosingConfirmation } = useTelegram();
    const { postEvent } = useTelegramWebviewProxy();

    useEffect(() => {
        expand?.();
    }, [expand]);

    useEffect(() => {
        const data = JSON.stringify({ allow_vertical_swipe: false });
        postEvent('web_app_setup_swipe_behavior', data);
    }, [postEvent]);
    enableClosingConfirmation();
    return (
        <ErrorCatch>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ErrorCatch>
    );
};
