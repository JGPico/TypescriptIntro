// Things I've learned in Typescript

// Installation and compile command line. tsc
// tsconfing.json
// third party librarys may need type annotation extensions.
// tooling -- typescript catches mores bugs than vanilla js
// valid js code is also valid in ts
// can declare types for variables 
// can create custome types
// Arrays and objects can be told to hold certain types
// Generics allow arrays/objects to hold a variety of types.
// Public vs private

import * as _ from 'lodash';

async function hello() {
    return 'world';
}

let lucky: number = 23;
// cant change lucky to string if declared a number; can be overwritten with :any type
// lucky = '23';

// custom type
type Style = 'bold' | 'italic';
let font: Style;


// Interface

interface Person {
    first: string;
    last: string;
    [key: string]: any; // - this lets you use add any additional key value pair, with any value.
}

const person: Person = {
    first: "Jeff",
    last: "Delaney"
}

const person2: Person = {
    first: "William",
    last: "Tell",
    fast: true // needs to match the custom type Person 
}

// Functions
function pow(x: number, y: number): string { // you can use void here, instead of string, if you are not returning a value.
    return Math.pow(x, y).toString();
}

pow(5, 10);

// Array
type MyList = [number?, string?, boolean?]; // ? means optional, in this case
const arr: MyList = []; // :number[] :Person[]
// const arr: Person[] = [];

arr.push(1);
arr.push('23');
arr.push(false);

// Generics

class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23);


type numArray = Array<number>;


const last = (arr: Array<any>) => {
    return arr[arr.length - 1];
}

// const last = <T>(arr: T[]) => {
//     return arr[arr.length - 1];
// }

const l = last([1, 2, 3]);

const l2 = last(['a', 'b', 'c']);

console.log(l,l2);