// Spot check 1

const person = {
    name: "Julius",
    speak: function(food) {
      console.log(`I like ${food}`)
    }
}

// person.speak('cheese toast');

// Exercise 1, 2

function calcAge(currentYear, birthYear) {
    return `You are either ${currentYear - birthYear} or ${(currentYear - birthYear) - 1}`;
}

const age = calcAge(2017, 1989);
// console.log(age)

// Exercise 3

function isEven(num) {
    return num % 2 === 0;
}

// console.log(isEven(1))

// Exercise 4

function printOdds(arr) {
    
    for (let num of arr) {
        
        if (!isEven(num)) {
            console.log(num)
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// printOdds(array)

// Exercise 5

function checkExists(arr, num) {
    return num in arr;
}

// console.log(checkExists(array, 5))

// Exercise 6

const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    }
};

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

// console.log(calculator.add(result1, result2))

// Exercise 7

function increaseByNameLength(money, name) {
    return money * name.length;
}

function makeRegal(name) {
    return `His Royal Highness, ${name}`;
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

// turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

// Exercise 8

function splice(arr, index, numToDelete) {
    const placeholderArr = [];
    const numToRun = arr.length;
    let numOfArg = 3;
    const argArray = splice.arguments;
    
    for (let i = 0; i < numToRun; i++) {
        const elem = arr.pop()
        placeholderArr.push(elem);
    }

    placeholderArr.reverse()

    for (let i = 0; i < numToRun; i++)   {
        
        if (numToDelete == 1) {
            
            if (i == index) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else {
                    arr.push(argArray[numOfArg]);
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        } 
        
        else if (numToDelete == 0) {
            
            if (i == index) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else if ((numOfArg + 1) == argArray.length) {
                    arr.push(splice.arguments[numOfArg]);
                    arr.push(placeholderArr[i]);
                    numOfArg++;
                } 
                else {
                    arr.push(placeholderArr[i]);
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        } 
        
        else if (numToDelete < 0) {
            
            if (i == index) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else if (numOfArg < argArray.length) {
                    arr.push(splice.arguments[numOfArg]);
                    arr.push(placeholderArr[i]);
                    numOfArg++;
                } 
                else {
                    arr.push(placeholderArr[i]);
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        } 
        
        else {
            
            if (index <= i && i < (index + numToDelete)) {
                
                if (numOfArg >= argArray.length) {
                    continue;
                } 
                else {
                    arr.push(argArray[numOfArg]);
                    numOfArg++;
                }
            } 
            else {
                arr.push(placeholderArr[i]);
            }
        }
    }

    return arr;
}

console.log(splice(array, 1, 3, 4, 3, 2));

// function test(a,b,c) {
//     console.log(test.arguments.length);
// }

// test(1,2,3,5,56)

// remove 1 element
let arr = [1,2,3]
splice(arr, 0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
splice(arr, 0,0,0); 
console.log(arr); //should be [0,1,2,3]


// add 2 elements
arr = [1,2,3]
splice(arr,0,0,-1,0); 
console.log(arr); //should be [-1,0,1,2,3]


// replace 1 element
arr = [1,2,3]
splice(arr,1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
splice(arr,1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = splice(arr,1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = splice(arr,1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = splice(arr,1,0,5); 
console.log(deleted); //should be [] 

