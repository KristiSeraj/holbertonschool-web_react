import * as notifications from '../../notifications.json';

function getAllNotificationsByUser(userId) {
    let arr;
    for (let i = 0; i < notifications.default.length; i++) {
        if (notifications[i].id === userId) {
            arr = [notifications[i].context];
        }
    }
    return arr;
}

export default getAllNotificationsByUser;