import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';

import { MeditationsBlock } from '@/modules/meditationBlock/MeditationsBlock';
import { Menu } from '@/modules/menu/Menu';
import { PodcastsBlock } from '@/modules/podcastsBlock/PodcastsBlock';
import { VideoBlock } from '@/modules/videoBlock/VideoBlock';
import { authToken } from '@/store/authSlice';
import { getUser } from '@/store/currentUserSlice';
import { getMeditationsAll } from '@/store/meditationsSlice';
import { addNewUser, getUsersAll } from '@/store/userSlice';
import { getVideosAll } from '@/store/videosSlice';
import { useTelegram } from '@/utils/hooks/useTelegram';
import { AllUsers, AuthResponse, AuthUser, UserResponse } from '@/utils/types';

import css from './Main.module.scss';
import { AffirmationDay } from './components/AffirmationDay';
import { BookBlock } from './components/BookBlock';
import { WaterTracker } from './components/WaterTracker';

const MainPage = () => {
    const { initDataUnsafe } = useTelegram();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
    const [userTokenFetched, setUserTokenFetched] = useState(false);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const userId: string = initDataUnsafe?.user?.id;
    const userName: string = initDataUnsafe?.user?.first_name;

    const authUser: AuthUser = useSelector((state: AuthResponse) => state.auth);
    const allUsers: AllUsers = useSelector((state: UserResponse) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getUsersAll());

            if (allUsers.data.length) {
                const isIdExists = allUsers.data.some((user) => `${user.user_id}` === userId);

                if (!isIdExists) {
                    dispatch(addNewUser({ user_id: userId ?? '2', user_name: userName ?? 'John' }));
                }
            }
        };

        fetchData();
    }, [userId, userName]);

    useEffect(() => {
        const fetchAuthToken = async () => {
            await dispatch(authToken(+userId));
        };

        const fetchMeditationsAll = async () => {
            await dispatch(getMeditationsAll());
        };

        const fetchVideosAll = async () => {
            await dispatch(getVideosAll());
        };

        if (!userTokenFetched) {
            fetchAuthToken();
            fetchMeditationsAll();
            fetchVideosAll();
            setUserTokenFetched(true);
        }
    }, [userTokenFetched]);

    useEffect(() => {
        const fetchUser = async () => {
            const userToken = authUser.user.length && authUser.user[0].api_token;

            if (userToken) {
                localStorage.setItem('api_token', authUser.user[0].api_token);
                await dispatch(getUser());
            }
        };

        if (userTokenFetched) {
            fetchUser();
        }
    }, [authUser.user, userTokenFetched]);

    return (
        <div className={css.container}>
            <AffirmationDay />
            <WaterTracker />
            <MeditationsBlock />
            <BookBlock />
            <PodcastsBlock isMobile={isMobile} />
            <VideoBlock isMobile={isMobile} />
            <Menu />
        </div>
    );
};

export default MainPage;
