import { normalize, schema } from 'normalizr';

export const courses = new schema.Entity('courses');

export function coursesNormalizer(data) {
    const normalizeData = normalize(data, [courses]);

    return normalizeData.entities.courses;
}