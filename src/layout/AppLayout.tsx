import { Suspense } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { Outlet } from 'react-router-dom';

import { Loader } from '@/components/Loader';

import css from './AppLayout.module.scss';

export const AppLayout = () => {
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

    return (
        <div className={css.layout}>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};
