import { List, Map } from './node_modules/immutable/dist/immutable';

export function concatElements(page1, page2) {
  const list1 = List([]);
  return list1.concat(page1, page2);
};

export function mergeElements(page1, page2) {
  const newMap = Map(page1).mergeDeep(page2);
  const newList = List(newMap.valueSeq());
  return newList;
};
