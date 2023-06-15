import { normalize, schema } from 'normalizr';
import * as notifications from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
    let arr;
    for (let i = 0; i < notifications.default.length; i++) {
        if (notifications[i].id === userId) {
            arr = [notifications[i].context];
        }
    }
    return arr;
}

const user = new schema.Entity("users");

const message = new schema.Entity('messages', 
    {}, 
    {
        idAttribute: 'guid'
    }
);

const notification = new schema.Entity('notifications', {
    author: user,
    context: message,
});

const normalizeData = normalize(notifications.default, [notification]);

export { normalizeData };
