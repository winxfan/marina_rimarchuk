import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';

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

    const userId: number = initDataUnsafe?.user?.id;
    const userName: string = initDataUnsafe?.user?.first_name;

    console.log(initDataUnsafe?.user, 'initDataUnsafe?.user');

    const authUser: AuthUser = useSelector((state: AuthResponse) => state.auth);
    const allUsers: AllUsers = useSelector((state: UserResponse) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getUsersAll());
            if (allUsers.data.length && userId) {
                const isIdExists = allUsers.data.some((user) => +user.user_id === +userId);

                if (!isIdExists) {
                    await dispatch(addNewUser({ user_id: userId, user_name: userName }));
                }
            }
        };

        fetchData();
    }, [userId, userName, dispatch]);

    useEffect(() => {
        const fetchAuthToken = async () => {
            await dispatch(authToken(Number(userId)));
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
    }, [userTokenFetched, dispatch, userId]);

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
    }, [authUser.user, userTokenFetched, dispatch]);

    return (
        <div className={css.container}>
            <div>
                <AffirmationDay />
                <WaterTracker />
                <PodcastsBlock isMobile={isMobile} />
                <BookBlock />
                <VideoBlock isMobile={isMobile} />
                <Menu />
            </div>
        </div>
    );
};

export default MainPage;
