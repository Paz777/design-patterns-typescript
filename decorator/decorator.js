"use strict";
class Car {
    getDescription() {
        return this.description;
    }
}
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model S";
    }
    cost() {
        return 73000;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = "Model X";
    }
    cost() {
        return 77000;
    }
}
class CarOptions extends Car {
}
class EnhancedAutoPilot extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot ';
    }
    cost() {
        return this.decoratedCar.cost() + 5000;
    }
}
class RearFacingSeats extends CarOptions {
    constructor(car) {
        super();
        this.decoratedCar = car;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ', Rear Facing Seats ';
    }
    cost() {
        return this.decoratedCar.cost() + 4000;
    }
}
let myTesla = new ModelS;
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.cost());
