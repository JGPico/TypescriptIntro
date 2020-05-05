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
    // [key: string]: any; - this lets you use add any additional key value pair, with any value.
}

const person: Person = {
    first: "Jeff",
    last: "Delaney"
}

const person2: Person = {
    first: "William",
    last: "Tell",
    // fast: true - this doesn't match the custom type, so throws an error
}