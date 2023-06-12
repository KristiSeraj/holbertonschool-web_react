import { List } from './node_modules/immutable/dist/immutable';

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  const newList = List(list);
  newList.push(element)
  return newList;
}
