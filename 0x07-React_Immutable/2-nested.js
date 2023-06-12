export default function accessImmutableObject(object, array) {
  if (!object || !Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  let value = object;

  for (let i = 0; i < array.length; i = i + 1) {
    const key = array[i];
    if (value && value.hasOwnProperty(key)) {
        value = value[key];
    } else {
        return undefined;
    }
  }

  return value;
}
