import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('UI Actions', () => {
    describe('testing functions', () => {
        it('login', () => {
            const userLogin = login('John', 'John1234');

            expect(userLogin).toEqual({ type: LOGIN, user: { email: 'John', password: 'John1234'} });
        }); 
        it('logout', () => {
            const userLogout = logout();

            expect(userLogout).toEqual({ type: LOGOUT });
        });
        it('displayNotification', () => {
            const displayNotification = displayNotificationDrawer();

            expect(displayNotification).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
        });
        it('hideNotification', () => {
            const hideNotification = hideNotificationDrawer();

            expect(hideNotification).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
        });
    });
});
