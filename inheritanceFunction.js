'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I studied ${this.course}`);
}

const tyson = new Student('Tyson', 1969, 'Computer Science');
console.log(tyson);

tyson.introduce();
tyson.calcAge();

console.log(tyson.__proto__);
console.log(tyson.__proto__.__proto__);

console.log(tyson instanceof Student);   // True
console.log(tyson instanceof Person);   // True
console.log(tyson instanceof Object);    // True

Student.prototype.constructor = Student;   // Setting the constuctor back to Student
console.dir(Student.prototype.constructor);