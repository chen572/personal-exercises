class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name) {
        this.children.push(name)
    }
}


const dog = new Animal('dog', 4);
dog.giveBirth('c1');

class Human {
    constructor(name, age, isFriendly) {
        this.name = name,
        this.age = age,
        this.isFriendly = isFriendly
    }
}

const h1 = new Human('Chen', 23, true);


class Vehicle {
    static carsSold = 0;
    static moneyEarned = 0;
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this._fuel = fuel;
        Vehicle.carsSold++;
        Vehicle.moneyEarned = Vehicle.carsSold * 30000;
    }

    static getInfo() {
        console.log(`We've sold ${Vehicle.carsSold} vehicles.`);
    }

    static calculateMoney() {
        console.log(`We've earned ${Vehicle.moneyEarned}$ from car sales.`)
    }

    set fuel(fuel) {
        if (fuel > 0 && fuel < 150) {
            this._fuel = fuel
        }
        console.log('fuel can\'t be under 0 or above 150 liters');
    }

    get fuel() {
        return this._fuel;
    }
}

const car1 = new Vehicle('x', 'y', 100, 100);
const car2 = new Vehicle('x','y', 150, 120);

