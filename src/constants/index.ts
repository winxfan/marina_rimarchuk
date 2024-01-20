export const { REACT_APP_SERVER_URL } = process.env;

export enum LoadingStatus {
    'none',
    'pending',
    'rejected',
    'fulfilled',
}
