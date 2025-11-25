/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // If classFunction is not a function, return false immediately
    if (typeof classFunction !== 'function') return false;

    // For null or undefined, there is no prototype chain → false
    if (obj === null || obj === undefined) return false;

    // If obj is a primitive, use Object(obj) to wrap it
    // Example: 5 -> Number object
    obj = Object(obj);

    let proto = Object.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto === classFunction.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }

    return false;
};
