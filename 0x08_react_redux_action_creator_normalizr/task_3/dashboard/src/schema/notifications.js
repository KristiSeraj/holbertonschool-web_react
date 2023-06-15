import { normalize, schema } from 'normalizr';
import * as notifications from '../../notifications.json';

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


export function getAllNotificationsByUser(userId) {
    let arr = [];
    const msg = normalizeData.entities.messages;
    const notification = normalizeData.entities.notifications;

    for (const el in notification) {
        if (notification[el].author === userId) {
            const guidId = notification[el].context;
            arr.push(msg[guidId]);
        }
    }
    return arr
}
