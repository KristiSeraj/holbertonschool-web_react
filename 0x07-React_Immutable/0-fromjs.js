const { fromJS } = require('immutable');
const getImmutableObject = (object) => {
    const map = fromJS(object);
    return map;
}

export default getImmutableObject;