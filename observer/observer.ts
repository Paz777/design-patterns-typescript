interface ISubject {
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers() : void;
}

interface IObserver {
    update(temperature: number): void;
}

// this is the subject

class WeatherStation implements ISubject {
    private temperature!: number;
    private allObservers: IObserver[] = [];

    setTemperature(temp: number) {
        console.log(`The temperature is being set to: ${temp}`);
        this.temperature = temp;
        this.notifyObservers();
    }

    registerObserver(observer: IObserver) {
        this.allObservers.push(observer);
    }

    removeObserver(observer: IObserver) {
        let index = this.allObservers.indexOf(observer);
        this.allObservers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.allObservers) {
            observer.update(this.temperature);
        }
    }
}

// this is the observer as it observes another object

class TemperatureDisplay implements IObserver {
    private subject: ISubject;

    constructor(weatherStation: ISubject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        console.log('Update the temperature display');
        // some other logic
    }
}

class Fan implements IObserver {
    private subject: ISubject;

    constructor(weatherStation: ISubject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        temperature > 25 ? console.log('Turning myself on') : console.log('Turning myself off')
    }
}

let weatherStation = new WeatherStation();
let temperatureDisplay = new TemperatureDisplay(weatherStation);
let fanning = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);

