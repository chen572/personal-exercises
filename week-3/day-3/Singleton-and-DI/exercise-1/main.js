class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}

class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}

class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}

const cheapFeeder = new CheapFeeder();
const luxuryFeeder = new LuxuryFeeder();
let weArePoor = false;

const animal1 = new Animal('Rex', 'Dinosaur', weArePoor ? cheapFeeder : luxuryFeeder);