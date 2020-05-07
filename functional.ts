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

const addEmoji = (val) => toString(val) + ':)';

// Classes in typescript

// class Emoji {
//     icon: string;
//     constructor(icon) {
//         this.icon = icon;
//     }
// }

class Emoji {

    private _prev;

    constructor(private _icon) {}

    get icon() { // getter allows user to read an icon, but not mutate. needed with private args.
        return this._icon
    }

    get prev() {
        return this._prev;
    }

    change(val) {
        this._prev = this._icon;
        this._icon = val;
    }
}

const emoji = new Emoji(':)')
// emoji.icon = ':(' --> can be mutated if constuctor has public args.

// console.log(emoji) //--> Emoji{':)'}

emoji.change('XD');
emoji.change(':p');

console.log(emoji.icon, emoji.prev); // --> ':p' 'XD'

// Static Methods

class EmojiNext {
    static addOneTo(val) {
        return 1 + val;
    }
}

EmojiNext.addOneTo(3);

// Inheritence

class Human {
    constructor(public name) {}

    sayHi() {
        return `Hello, ${this.name}`;
    }
}

const patrick = new Human ('Patrick Mullot');
console.log( patrick.sayHi() ); // --> Hello, Patrick Mullot

class SuperHuman extends Human {

    heroName;

    constructor(name) {
        super(name);
        this.heroName = `HERO ${name}`
    }

    superpower() {
        return `${this.heroName} eats lemons whole`
    }
}

const steph = new SuperHuman('Steph Curry🍋');

console.log( steph.sayHi() ) // --> Hello, Steph Curry

