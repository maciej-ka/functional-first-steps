
export function filter(predicateFn, array) {
    // TODO
}





//// Array helpers

// The functions below let us work with JavaScript arrays using a more functional API (e.g. length(array)), instead of the usual object-oriented method-calling API (e.g. array.length).

// Concatenate two arrays into a new single array
function concat(array1, array2) {
    return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
    return array.length;
}

// Return the first item in an array
export function head(array) {
    return array[0];
}

// Return the rest of an array after the first item
export function tail(array) {
    return array.slice(1);
}