import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import uiReducer, { initialUiState } from './uiReducer';
import notificationReducer, { initialNotificationState } from './notificationReducer'
import { Map } from 'immutable';

export const initialState = {
    courses: Map([]),
    notifications: Map(initialNotificationState),
    ui: Map(initialUiState)
}

const rootReducer = {
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
};


export default rootReducer;
