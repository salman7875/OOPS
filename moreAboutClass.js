'use strict';

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected Data But Not Private
        this._pin = pin;
        this._movements = [],
        this.locale = navigator.language

        console.log(`Thanks for Opening an Account, ${this.owner}`);
    }

    // Public Interface
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val);
    } 

    withdrawal(val) {
        // this.movements.push(-100);    // Method 1
        this.deposit(-val);   // Method 2 -> We can pass function inside of a function
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log('Loan Approved');
        }
    }
}

const acc1 = new Account('Doctor', '$', 1111);
console.log(acc1);

/*
It works, but not good
acc1._movements.push(250);
acc1._movements.push(-50);
*/

// Alternative of Above Comment
acc1.deposit(250);
acc1.withdrawal(100);

acc1.requestLoan(1000);
// acc1._approveLoan(1500); 

console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1._pin);