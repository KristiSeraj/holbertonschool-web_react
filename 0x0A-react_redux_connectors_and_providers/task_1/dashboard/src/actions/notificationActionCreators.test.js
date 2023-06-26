import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('otification Actions', () => {
    describe('testing functions', () => {
        it('markAsRead', () => {
            const markAsReadTest = markAsAread(1);

            expect(markAsReadTest).toEqual({ type: MARK_AS_READ, index: 1 });
        }); 
        it('setTypeFilter', () => {
            const setTypeFilterTest = setNotificationFilter(NotificationTypeFilters.DEFAULT);

            expect(setTypeFilterTest).toEqual({ type: SET_TYPE_FILTER, filter: 'DEFAULT' });
        });
    });
});