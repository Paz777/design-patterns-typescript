class BlurayPlayer {
    on() {
        console.log('Bluray Player turning on');
    }

    off() {
        console.log('Bluray player turning off');
    }

    play() {
        console.log('Playing bluray disc');
    }
}

class Amplifier {
    on() {
        console.log('Amplifier turning on');
    }

    off() {
        console.log('Amplifier turning off');
    }

    setSource(source: string) {
        console.log('Setting source to ' + source);
    }

    setVolume(volumeLevel: number) {
        console.log('Setting volume to ' + volumeLevel);
    }
}

class Lights {

    dim() {
        console.log('Lights are dimming ');
    }
}

class TV {
    on() {
        console.log('TV turning on ');
    }

    off() {
        console.log('TV turning off');
    }
}

class PopcornMaker {
    on() {
        console.log('Popcorn maker turning on');
    }

    off() {
        console.log('Popcorn maker turning off');
    }

    pop() {
        console.log('Popping');
    }
}

class HomeTheatreFacade {
    private bluray: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMaker: PopcornMaker;

    constructor(bluray: BlurayPlayer, amp: Amplifier, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }

    public watchMovie() {
        this.popcornMaker.on();
        this.popcornMaker.pop();

        this.lights.dim();
        this.tv.on();
        this.amp.on();
        this.amp.setSource('bluray');
        this.amp.setVolume(25);
        this.bluray.on();
        this.bluray.play();
    }

    public endMovie() {
        this.popcornMaker.off();
        this.tv.off();
        this.amp.off();
        this.bluray.off();
    }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let homeTheatre = new HomeTheatreFacade(bluray, amp, lights, tv, popcornMaker);
homeTheatre.watchMovie();
console.log('');
homeTheatre.endMovie();