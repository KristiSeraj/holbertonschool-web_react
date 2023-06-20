import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('Course Actions', () => {
    describe('testing functions', () => {
        it('select course', () => {
            const select = selectCourse(1);

            expect(select).toEqual({ type: SELECT_COURSE, index: 1 });
        });
        it('unselect course', () => {
            const unselect = unSelectCourse(1);

            expect(unselect).toEqual({ type: UNSELECT_COURSE, index: 1 });
        });
    });
});
