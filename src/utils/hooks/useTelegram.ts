export const useTelegram = () => {
    return (window as any)?.Telegram?.WebApp ?? {};
    // return {
    //     expand: () => {},
    //     BackButton: {
    //         hide: () => {},
    //         offClick: (value: any) => {},
    //         onClick: (value: any) => {},
    //         show: () => {},
    //     },
    //     initDataUnsafe: {
    //         user: {
    //             id: 839215480,
    //             first_name: 'Dmitry',
    //         },
    //     },
    // };
};
