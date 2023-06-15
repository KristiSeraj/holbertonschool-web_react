import { getAllNotificationsByUser, normalizeData } from './notifications';

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
        });
    });

    describe('normalizeData', () => {
        it('should test the normalized data', () => {
            const expectedReturn = [
                "5debd76480edafc8af244228",
                "5debd764507712e7a1307303",
                "5debd76444dd4dafea89d53b",
                "5debd76485ee4dfd1284f97b",
                "5debd7644e561e022d66e61a",
                "5debd7644aaed86c97bf9d5e",
                "5debd76413f0d5e5429c28a0",
                "5debd7642e815cd350407777",
                "5debd764c1127bc5a490a4d0",
                "5debd7646ef31e0861ec1cab",
                "5debd764a4f11eabef05a81d",
                "5debd764af0fdd1fc815ad9b",
                "5debd76468cb5b277fd125f4",
                "5debd764de9fa684468cdc0b"
            ];

            const result = normalizeData.result;

            expect(result).toEqual(expect.arrayContaining(expectedReturn));
        });
        it('should test the normalized data with user entity', () => {
            const userId = "5debd764a7c57c7839d722e9";

            const result = normalizeData.entities.users[userId];
            const user =
                {
                    "id": "5debd764a7c57c7839d722e9",
                    "name": {
                    "first": "Poole",
                    "last": "Sanders"
                    },
                    "email": "poole.sanders@holberton.nz",
                    "picture": "http://placehold.it/32x32",
                    "age": 25
                }

            expect(result).toEqual(user);
        });
        it('should test the normalized data with message entity', () => {
            const guid = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";

            const result = normalizeData.entities.messages[guid];

            const msg =
                {
                    "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
                    "isRead": false,
                    "type": "default",
                    "value": "Cursus risus at ultrices mi."
                }

            expect(result).toEqual(msg);
        });
        it('should test the normalized data with notification entity', () => {
            const notificationId = "5debd7642e815cd350407777";

            const result = normalizeData.entities.notifications[notificationId];
            
            const msg =
                {
                    "author": "5debd764f8452ef92346c772",
                    "context": "3068c575-d619-40af-bf12-dece1ee18dd3",
                    "id": "5debd7642e815cd350407777"
                }

            expect(result).toEqual(msg);
        });
    });
});
