import { TODO_DOWNLOADED_CHANGE } from "../actions/DownloadedActions";
import { USER_DOWNLOADED_CHANGE } from "../actions/DownloadedActions";

export const downloadedReducer = (state = [false, false], action) => {
    console.log(action);
    switch (action.type) {
        case TODO_DOWNLOADED_CHANGE:
            return [!state[0], state[1]];
        case USER_DOWNLOADED_CHANGE:
            return [state[0], !state[1]];
        default:
            return state;
    }
}
