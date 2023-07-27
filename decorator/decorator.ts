abstract class Car {

    public description!: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost() : number;
}

class ModelS extends Car {

    public description = "Model S";

    public cost() : number {
        return 73000;
    }
}

class ModelX extends Car {

    public description = "Model X"

    public cost() : number {
        return 77000;
    }
}

abstract class CarOptions extends Car {

    decoratedCar!: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }


    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot ';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

class RearFacingSeats extends CarOptions {

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear Facing Seats ';
    }
    public cost(): number {
        return this.decoratedCar.cost() + 4000;
    }
}

let myTesla = new ModelS;
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.cost());

