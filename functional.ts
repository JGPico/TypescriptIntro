// Pure functions

let num = 123;

function toString(val) {
    // num = val; This makes the function impure
    return val.toString();
}

const str = toString(num);
// console.log(typeof str) --> string;

// Immutable data

const data = Object.freeze([1,2,3,4,5,6]);

// Functions as arguments

const addEmoji = (val) => toString(val) + '';