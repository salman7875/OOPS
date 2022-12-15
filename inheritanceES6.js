'use strict'

class PersonCl {
  constructor (fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  // Instance Method
  // Method will be added to .prototype property of PersonCl class
  calcAge () {
    console.log(2037 - this.birthYear)
  }

  greet () {
    console.log(`Hey! ${this.fullName}`)
  }

  get age () {
    return 2037 - this.birthYear
  }

  // Set a Property that already Exists
  set fullName (name) {
    if (name.includes(' ')) {
      this._fullName = name
    } else {
      console.log(`${name} is not a Full Name!`)
    }
  }

  get fullName () {
    return this._fullName
  }

  // Static Method
  static hey () {
    console.log(`Hey there 👋`)
  }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);     // Super -> It is basically the constructor of the Parent Class
        this.course = course; 
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I studied ${this.course}`);
    }
    
    // Method Overwrite
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} Old`);
    }
}

const doctor = new StudentCl('Doctor xd', 2020, 'Computer Science');
doctor.introduce();
doctor.calcAge();