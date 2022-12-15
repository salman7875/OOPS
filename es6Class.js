'use strict';

/*
1. Classes are NOT hoisted
2. Classes are first-class function
3. Classes are executed in strict mode
*/

// Class Expression
// const PersonCl = class {

// }

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance Method
    // Method will be added to .prototype property of PersonCl class
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey! ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a Property that already Exists
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            console.log(`${name} is not a Full Name!`)
        }
    }

    get fullName() {
        return this._fullName;
    }

    // Static Method
    static hey() {
        console.log(`Hey there 👋`);
    }
}

// PersonCl.prototype.greet = function() {
//     console.log(`Hey! ${this.fullName}`);
// }

const bunny = new PersonCl('Bunny Imposter', 2018);
bunny.calcAge();
bunny.greet();
console.log(bunny.age);

console.log(bunny.__proto__ === PersonCl.prototype);

const imposter = new PersonCl('Imposter xD', 2017);
console.log(imposter);

// Calling Static Method
PersonCl.hey();
// bunny.hey();    // Error

////////////////////////////////////////////////////////////////////////
// Getters And Setters in Object Literal

const account = {
    owner: 'Doctor',
    movements: [120, 400, 200, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
}

console.log(account.latest);
account.latest = 500;
console.log(account.movements);
