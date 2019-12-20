
var animalPopulation = 0;

function run() {
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn('Rarity');
    var gemma = new Giraffe('Gemma');
    var stinger = new Bee('Stinger');
    var allAnimals= [tigger,pooh,rarity,gemma,stinger];
    var zoebot = new zookeeper('Zoebot');

    //console.log(Animal.getPopulation());

    zoebot.feedAnimals(allAnimals,'pollen');

    // tigger.eat('meat');
    // pooh.eat('fish');
    // pooh.eat('meat');
    // rarity.eat('marshmallows');
    // rarity.sleep();
    // gemma.eat('meat');
    // gemma.eat('leaves');
    // stinger.eat('ice cream');
    // stinger.eat('pollen');

    // var shape = new Shape("shape");
    // var poly = new Polygon(10,20);
    // shape.sayName();
    // shape.sayHistory();
    // poly.sayName();
    // poly.sayHistory();
}

class zookeeper {

    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals,food) {
        console.log(this.name + ' is feeding ' + food + ' to ' + animals.length + ' of ' + Animal.getPopulation() + ' total animals');
        for(var i=0; i<animals.length; i++) {
            animals[i].eat('food');
        }
    }
}

class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++ ;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours.");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood);
        } else {
            this.sleep(this.name);
        }
    }

    static getPopulation() {
        return animalPopulation;
    }
}

class Unicorn extends Animal {

    constructor(name) {
        super(name,'marshmallows');
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud.");
    }
}

class Giraffe extends Animal {

    constructor(name) {
        super(name, 'leaves');
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood);
            this.sleep(this.name);
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {

    constructor(name) {
        super(name, 'pollen');
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if(food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood);
            this.sleep(this.name);
        } else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }

    sleep() {
        console.log(this.name + ' never sleeps.');
    }
}

class Shape {

    constructor(name) {
        this.name = name;
        this.special = true;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }

    sayHistory() {
        console.log("Shapes have a wonderful history.");
    }
}

class Polygon extends Shape{

    constructor(height, width) {
        super('Polygon');
        this.height = height;
        this.width = width;
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}

class Tiger extends Animal{

    constructor(name) {
        super(name,'meat');
    }
}

class Bear extends Animal{

    constructor(name) {
        super(name,'fish');

    }

    sleep() {
        console.log(this.name + " hibernates for 4 months.");
    }
}




