class Exercises {
    constructor() {

    }

    isEven(n) {
        if (typeof n !== 'number') {
            return { error: `the input was not a number` }
        }
        return n % 2 == 0 ? true : false
    }

    removeAtLeastOne(arr) {
        if (arr.length < 1) {
            return { error: 'cant remove from an empty array' }
        }
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("").toLowerCase()
    }

    validate(arr) {
        if (arr.some(b => typeof b === "boolean")) {
            return arr.filter(b => b === true).length > arr.filter(b => b === false).length
        }
        return { error: "Need at least one boolean" }
    }

    add(x, y){
        let stuff = []
        stuff.push(x, y)
    }
}

module.exports = Exercises