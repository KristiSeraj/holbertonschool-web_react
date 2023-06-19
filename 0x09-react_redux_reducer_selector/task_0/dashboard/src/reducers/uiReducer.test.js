import { uiReducer, initialState} from "./uiReducer";
import { LOGIN_FAILURE } from "../actions/uiActionTypes";

describe('UI Reducer', () => {
    describe('testing state', () => {
        it('should test state with undefined', () => {
            const result = uiReducer(undefined, {});

            expect(result).toEqual(initialState)
        });
        it('should test state with undefined and a type', () => {
            const result = uiReducer(undefined, { type: 'UNSELECT_COURSE' });

            expect(result).toEqual(initialState);
        });
        it('should test state with undefined and a type', () => {
            const result = uiReducer(undefined, { type: LOGIN_FAILURE });

            expect(result).toEqual({
                ...initialState,
                isUserLoggedIn: false
            });
        });
    });
});
