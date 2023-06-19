import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

export const courseReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_COURSE_SUCCESS: return state.map((course) => {
            return {
                ...course,
                isSelected: false
            }
        })
        case SELECT_COURSE: return state.map((course, index) => {
            const current = {
                ...course
            }

            if (current.id === action.index) current.isSelected = true

            return current;
        })
        case UNSELECT_COURSE: return state.map((course, index) => {
            const current = {
                ...course
            }

            if (current.id === action.index) current.isSelected = false

            return current;
        })
        default: return state;
    }
}