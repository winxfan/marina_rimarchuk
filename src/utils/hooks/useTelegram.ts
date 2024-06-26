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
    //             id: 519280240,
    //             first_name: 'Dmitry',
    //         },
    //     },
    // };
};
