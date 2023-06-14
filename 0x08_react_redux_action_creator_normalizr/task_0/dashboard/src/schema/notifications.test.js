import getAllNotificationsByUser from './notifications';

describe('notification_test', () => {
    describe('getAllNotificationsByUser', () => {
        it('should return the filtered list', () => {
            const userId = '5debd76480edafc8af244228';

            const expectedResult = [
                {
                    "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
                    "isRead": true,
                    "type": "urgent",
                    "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                }
            ]

            const filtered = getAllNotificationsByUser(userId);

            expect(filtered).toEqual(expect.arrayContaining(expectedResult));
        })
    })
})