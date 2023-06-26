import { courseReducer } from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";
import { Map, fromJS } from 'immutable';
import { coursesNormalizer } from "../schema/courses";

describe('Course Reducer', () => {
    describe('testing state', () => {
        it('should test state with default', () => {
            const result = courseReducer(undefined, {});

            expect(result).toEqual(Map([]));
        });
        it('should test state with FETCH_COURSE_SUCCESS', () => {
            const data = {
              type: FETCH_COURSE_SUCCESS,
              data: [
                {
                  id: 1,
                  name: "ES6",
                  credit: 60,
                },
                {
                  id: 2,
                  name: "Webpack",
                  credit: 20,
                },
                {
                  id: 3,
                  name: "React",
                  credit: 40,
                },
              ],
            };
            const returnedData = [
              {
                id: 1,
                name: "ES6",
                isSelected: false,
                credit: 60,
              },
              {
                id: 2,
                name: "Webpack",
                isSelected: false,
                credit: 20,
              },
              {
                id: 3,
                name: "React",
                isSelected: false,
                credit: 40,
              },
            ];
            const result = courseReducer(undefined, data);

            expect(result.toJS()).toEqual(coursesNormalizer(returnedData));
        });
        it('should test state with SELECT_COURSE', () => {
            const data = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: false,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ]
            const returnedData = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: true,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ]
            const result = courseReducer(fromJS(coursesNormalizer(data)), { type: SELECT_COURSE, index: 2 });

            expect(result.toJS()).toEqual(coursesNormalizer(returnedData));
        });
        it('should test state with UNSELECT_COURSE', () => {
            const data = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: true,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ]
            const returnedData = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: false,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ]
            const result = courseReducer(fromJS(coursesNormalizer(data)), { type: UNSELECT_COURSE, index: 2 });

            expect(result.toJS()).toEqual(coursesNormalizer(returnedData));
        });
    });
});
