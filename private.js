'use strict'

/*
1) Public Fields
2) Private Fields
3) Public Methods
4) Private Methods
(There is also the Static version)
*/

class Account {
    // 1) Public fields  (Present on all Instances, Not on Prototype)
    locale = navigator.language;

    // 2) Private fields  (Present on all Instances, Not on Prototype)
    #movements = [];
    #pin;

  constructor (owner, currency, pin) {
    this.owner = owner
    this.currency = currency
    this.#pin = pin;
    // this._movements = [], 
    // this.locale = navigator.language

    console.log(`Thanks for Opening an Account, ${this.owner}`)
  }

  // 3) Public Methods 
  // Public Interface
  getMovements () {
    return this.#movements;
  }

  deposit (val) {
    this.#movements.push(val)
    return this;
  }

  withdrawal (val) {
    // this.#movements.push(-100);    // Method 1
    this.deposit(-val) // Method 2 -> We can pass function inside of a function
    return this;
  }

  requestLoan (val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log('Loan Approved')
      return this;
    }
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }   

  // 5) Static 
  static helper() {
    console.log('Helper Available only on Class, Not on Instances.');
  }  
}

const acc1 = new Account('Doctor', '$', 1111)
console.log(acc1)

/*
It works, but not good
acc1._movements.push(250);
acc1._movements.push(-50);
*/

// Alternative of Above Comment
acc1.deposit(250)
acc1.withdrawal(100)

acc1.requestLoan(1000)
// console.log(acc1.#approveLoan(1500));   // Not Accesible 

Account.helper();

console.log(acc1.getMovements())

console.log(acc1)
// console.log(acc1.#pin)

// console.log(acc1.#movements); // Not accessible
// console.log(acc1.#pin); // Not accessible

// Chaining
acc1.deposit(150).deposit(700).withdrawal(900).requestLoan(5000);
console.log(acc1.getMovements());