'use strict';

/////////////////////////////////////////////////////////////////////////
// Constructor Function and the new Operator
const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
}

const doctor = new Person('Doctor', 2021);
console.log(doctor);

const ninja = new Person('Ninja', 2022);
console.log(ninja);

const dc = new Person('DC', 2018);
console.log(dc);

const jack = { firstName: 'Jack', birthYear: 2018 };
console.log(jack);

/*
// Important
1. New Empty Object {} is Created
2. function is called, this = Empty Object {}
3. Empty Object {} is linked to prototype
4. function automatically returns {} 
*/

// To Check if object is instance or not
console.log(doctor instanceof Person);   // True
console.log(jack instanceof Person);    // False

////////////////////////////////////////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

doctor.calcAge();
ninja.calcAge();

// To check prototype of object
console.log(doctor.__proto__);
console.log(doctor.__proto__ === Person.prototype);   // True
console.log(Person.prototype.isPrototypeOf(doctor));   // True

console.log(Person.prototype.isPrototypeOf(Person));   // False

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);   // False
console.log(Person.prototype.isPrototypeOf(jack));   // False

// Setting Properties to Prototype
Person.prototype.species = 'Homo Sapiens';

console.log(doctor.species, dc.species);

// To check if object has its own properties
console.log(doctor.hasOwnProperty('firstName'));   // True
console.log(doctor.hasOwnProperty('species'));   // False

//////////////////////////////////////////////////////////////////////////////
// Protoype Chaining
console.log(doctor.__proto__.__proto__);   // Object.prototype (Top of prototype chain)
console.log(doctor.__proto__.__proto__.__proto__);   // null

console.log(Person.prototype.constructor);

// Checking the prototype of constructor
const arr = [1, 3, 2, 3, 7, 7];    // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Creating Our Own Array Method
Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique());

// Static Method:- It is not inherited. It remain on the Constructor function
Person.hey = function() {
    console.log(`hey there 👋`);
}

Person.hey();
doctor.hey();  // Error