'use strict';

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const ibbu = Object.create(PersonProto);
console.log(ibbu);
ibbu.name = 'Ibbu';
ibbu.birthYear = 2001;
ibbu.calcAge();
console.log(ibbu);

const aman = Object.create(PersonProto);
aman.init('Aman', 2000);
console.log(aman);
aman.calcAge();