export const TODO_DOWNLOADED_CHANGE = 'DOWNLOADED_CHANGE';
export const USER_DOWNLOADED_CHANGE = 'USER_DOWNLOADED_CHANGE';

export const todoDownloadedChangeAction = (payload) => ({
    type: TODO_DOWNLOADED_CHANGE,
    payload
});

export const userDownloadedChangeAction = (payload) => ({
    type: USER_DOWNLOADED_CHANGE,
    payload
});