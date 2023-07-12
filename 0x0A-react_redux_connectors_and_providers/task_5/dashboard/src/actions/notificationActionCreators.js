import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes"

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index
    }
}

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter
    }
}

export const setLoadingState = (load) => {
    return {
        type: 'SET_LOADING_STATE',
        load
    }
}

export const setNotifications = (arr) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        arr
    }
}

export const fetchNotifications = () => {
    dispatch(setLoadingState(true));
    fetch('/notificatios.json')
}