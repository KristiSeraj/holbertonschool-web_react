import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer} from '../schema/notifications';

export const initialNotificationState = {
    notifications: [],
    filter: 'DEFAULT'
}

const notificationReducer = (state = Map(initialNotificationState), action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalized = notificationsNormalizer(action.data);
            Object.keys(normalized).map((key) => {
                normalized[key].isRead = false;
            });
            return state.merge(normalized);
        case MARK_AS_READ:
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default: break;
    }
    return state;
}

export default notificationReducer;