"use strict";
// this is the subject
class WeatherStation {
    constructor() {
        this.allObservers = [];
    }
    setTemperature(temp) {
        console.log(`The temperature is being set to: ${temp}`);
        this.temperature = temp;
        this.notifyObservers();
    }
    registerObserver(observer) {
        this.allObservers.push(observer);
    }
    removeObserver(observer) {
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
class TemperatureDisplay {
    constructor(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature) {
        console.log('Update the temperature display');
        // some other logic
    }
}
class Fan {
    constructor(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(temperature) {
        temperature > 25 ? console.log('Turning myself on') : console.log('Turning myself off');
    }
}
let weatherStation = new WeatherStation();
let temperatureDisplay = new TemperatureDisplay(weatherStation);
let fanning = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
