import { notificationReducer  } from "./notificationReducer";
import { MARK_AS_READ, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

describe('Notification Reducer', () => {
    describe('testing state', () => {
        it('should test state with default', () => {
            const result = notificationReducer(undefined, {});

            expect(result).toEqual({filter: 'DEFAULT', notifications: []});
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

          const returnedData = {
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

          const result = notificationReducer(undefined, data);

          expect(result).toEqual(returnedData);
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

        const returnedData = {
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
              isRead: true,
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

        const result = notificationReducer(data, { type: MARK_AS_READ, index: 2});

        expect(result).toEqual(returnedData);
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

        const returnedData = {
          filter: "URGENT",
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

        const result = notificationReducer(data, { type: SET_TYPE_FILTER, filter: 'URGENT'});

        expect(result).toEqual(returnedData);
      });
    });
});
