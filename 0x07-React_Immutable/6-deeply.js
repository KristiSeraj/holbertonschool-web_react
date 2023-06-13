import { Map } from './node_modules/immutable/dist/immutable';

export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map2.mergeDeep(map1);
}
