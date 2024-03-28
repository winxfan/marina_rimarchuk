import { Suspense, useState } from 'react';
import ReactPlayer from 'react-player';
import { Outlet } from 'react-router-dom';

import cs from 'classnames';

import { Loader } from '@/components/Loader';

import css from './AppLayout.module.scss';

export const AppLayout = () => {
    const [videoPlayed, setVideoPlayed] = useState(false);

    const handleVideoEnded = () => {
        setVideoPlayed(true);
    };

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
        <div className={cs(videoPlayed ? css.layout : '')}>
            <Suspense fallback={<Loader />}>
                {!videoPlayed && (
                    <ReactPlayer
                        url="https://content-water.plutus-fin.ru/videos/intro.mp4"
                        playing={true}
                        loop={false}
                        muted={true}
                        width="100%"
                        height="100%"
                        style={{ position: 'relative', top: 0, left: 0 }}
                        onEnded={handleVideoEnded}
                    />
                )}

                {videoPlayed && <Outlet />}
            </Suspense>
        </div>
    );
};
