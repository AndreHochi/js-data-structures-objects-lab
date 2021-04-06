// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value) {
    let newObj = Object.assign({}, object);
    newObj[key] = value;
    return newObj;
}

function deleteFromDriverByKey(object, key) {
    let newObj = Object.assign({}, object);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key, value) {
    delete object[key];
    return object;
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

