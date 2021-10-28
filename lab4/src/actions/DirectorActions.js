export const DIRECTOR_ADD = 'DIRECTOR_ADD';
export const DIRECTOR_DELETE = 'DIRECTOR_DELETE';

export const addDirectorAction = (payload) => ({
    type: DIRECTOR_ADD,
    payload
});

export const deleteDirectorAction = (payload) => ({
    type: DIRECTOR_DELETE,
    payload
})