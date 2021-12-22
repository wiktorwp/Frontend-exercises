export const PREZENT_ADD = 'PREZENT_ADD';
export const PREZENT_DELETE = 'PREZENT_DELETE';
export const PREZENT_EDIT = 'PREZENT_EDIT';
export const PREZENT_COMPLETE = 'PREZENT_COMPLETE';
export const PREZENTS_UPDATE = 'PREZENT_UPDATE';

export const addPrezentAction = (payload) => ({
    type: PREZENT_ADD,
    payload
});

export const deletePrezentAction = (payload) => ({
    type: PREZENT_DELETE,
    payload
})

export const editPrezentAction = (payload) => ({
    type: PREZENT_EDIT,
    payload
})

export const completePrezentAction = (payload) => ({
    type: PREZENT_COMPLETE,
    payload
})

export const updatePrezentsAction = (payload) => ({
    type: PREZENTS_UPDATE,
    payload
})
