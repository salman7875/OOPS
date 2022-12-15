'use strict';
/*
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

2. Make the 'charge' property private

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is moving at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`${this.make} is moving at ${this.speed} km/h`);
    return this;
  }
}

class EVCL extends CarCl {
  #charge;  // Private
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} is moving at ${this.speed}km/h, with the charge of ${this.#charge}%`);
    return this;
  }
}

const ferrari = new EVCL('Ferari', 120, 23);
console.log(ferrari);

ferrari.accelerate().accelerate().chargeBattery(90).accelerate().brake();