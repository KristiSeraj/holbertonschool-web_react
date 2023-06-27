import { notificationReducer  } from "./notificationReducer";
import { MARK_AS_READ, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

describe('Notification Reducer', () => {
    describe('testing state', () => {
        it('should test state with default', () => {
            const result = notificationReducer(undefined, {});

            expect(result).toEqual(Map({filter: 'DEFAULT', notifications: []}));
        });
        it('should test state with FETCH_NOTIFICATIONS_SUCCESS', () => {
          const data = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
              {
                id: 1,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available"
              }
            ]
          }
          
          const returnedData = [
              {
                id: 1,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available"
              }
            ]

          const normalizedData = notificationsNormalizer(returnedData);
          
          const expectedResult = {
            filter: 'DEFAULT',
            ...normalizedData
          }
          
          expectedResult.notifications[1].isRead = false;
          expectedResult.notifications[2].isRead = false;
          expectedResult.notifications[3].isRead = false;

          const result = notificationReducer(undefined, data);

          expect(result.toJS()).toEqual(expectedResult);
      });
      it('should test state with MARK_AS_READ', () => {
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

        const returnedData = [
            {
              id: 1,
              type: "default",
              value: "New course available"
            },
            {
              id: 2,
              type: "urgent",
              value: "New resume available"
            },
            {
              id: 3,
              type: "urgent",
              value: "New data available"
            }
          ]

        const normalizedData = notificationsNormalizer(returnedData);

        const expectedResult = {
          filter: 'DEFAULT',
          ...normalizedData
        }

        expectedResult.notifications[1].isRead = false;
        expectedResult.notifications[2].isRead = true;
        expectedResult.notifications[3].isRead = false;

        const result = notificationReducer(fromJS(data), { type: MARK_AS_READ, index: 2});

        expect(result.toJS()).toEqual(expectedResult);
      });
      it('should test state with SET_TYPE_FILTER', () => {
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

        const returnedData = [
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

        const normalizedData = notificationsNormalizer(returnedData);

        const expectedResult = {
          filter: 'URGENT',
          ...normalizedData
        }

        const result = notificationReducer(fromJS(data), { type: SET_TYPE_FILTER, filter: 'URGENT'});

        expect(result.toJS()).toEqual(expectedResult);
      });
    });
});
