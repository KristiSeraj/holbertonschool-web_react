import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const courseReducer = (state = Map([]), action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS: 
        const normalized = coursesNormalizer(action.data);
        Object.keys(normalized).map((key) => {
            normalized[key].isSelected = false;
        })
        return state.merge(normalized);

        case SELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], false);
        default: return state;
    }
}