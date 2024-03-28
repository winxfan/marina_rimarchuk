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

   */

    return (
        <div className={cs(videoPlayed ? css.layout : '')}>
            {!videoPlayed && (
                <video style={{ position: 'relative', top: 0, left: 0 }} autoPlay muted loop>
                    <source src="https://content-water.plutus-fin.ru/videos/intro.mp4" type="video/mp4" />
                </video>
            )}

            {videoPlayed && (
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            )}
        </div>
    );
};
