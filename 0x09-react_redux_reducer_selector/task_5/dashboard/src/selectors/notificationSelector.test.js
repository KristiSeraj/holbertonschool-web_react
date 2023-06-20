import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications} from './notificationSelector';
import { notificationsNormalizer } from '../schema/notifications';
import { notificationReducer } from '../reducers/notificationReducer';

describe('Selectors testing', () => {
    describe('notification testing', () => {
        it('test that filteredTypeSelected work as expected', () => {
            const result = notificationReducer(undefined, {});

            expect(filterTypeSelected(result)).toEqual({filter: 'DEFAULT', notifications: []}.filter);
        });
        it('test that getNotifications returns a list of the message entities within the reducer', () => {
            const data = {
                filter: "DEFAULT",
                notifications: [
                  {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                  },
                  {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                  },
                  {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                  }
                ]
            }
            
            data.notifications = notificationsNormalizer(data.notifications).notifications;

            const result = notificationReducer(fromJS(data), {});

            expect(result instanceof Map).toEqual(true);
            expect(getNotifications(result).toJS()).toEqual(notificationsNormalizer(data.notifications).notifications);
        });
        it('test that getUnreadNotifications returns a list of the message entities within the reducer', () => {
            const data = {
                filter: "DEFAULT",
                notifications: [
                  {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                  },
                  {
                    id: 2,
                    isRead: false,
                    type: "urgent",
                    value: "New resume available"
                  },
                  {
                    id: 3,
                    isRead: true,
                    type: "urgent",
                    value: "New data available"
                  }
                ]
            }

            const expectedResult = [
                {
                    id: 3,
                    isRead: true,
                    type: "urgent",
                    value: "New data available"   
                }
            ]
            
            data.notifications = notificationsNormalizer(data.notifications).notifications;

            const result = notificationReducer(fromJS(data), {});

            expect(result instanceof Map).toEqual(true);
            expect(getUnreadNotifications(result).toJS()).toEqual(notificationsNormalizer(expectedResult).notifications);
        })
    });
});
