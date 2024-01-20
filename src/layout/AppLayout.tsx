import { type FC, type ReactNode } from 'react';

import css from './AppLayout.module.scss';

export interface AppLayoutProps {
    children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    /*  const dispatch = useDispatch();
    const userStatus = useSelector((store) => store.user.user.status);
    const userData = useSelector((store) => store.user.user.data, shallowEqual);

    const isAuth = userStatus === LoadingStatus.fulfilled && userData?.id;

    useEffect(() => {
        if (!isAuth && document.cookie.includes('authToken')) {
            // todo create authentification api
            dispatch(getUser({ id: 123 }));
        }
    }, [dispatch, isAuth]);*/

    return <div className={css.layout}>{children}</div>;
};
