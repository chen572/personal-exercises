let numChildren = 3;
const isCareful = false;

if (!(isCareful)) {
    numChildren--;
}


const silverwareCount = 6;

if ((silverwareCount % 2) === 0) {
    // console.log('somethings missing');
}

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance === 'good') {
    salary += goodBonus;
} else if (performance === 'stellar')   {
    salary += stellarBonus;
}

// console.log(salary)

const isVip = false;
let cash = 500;

// if (isVip || cash > 300)    {
    
// }


const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

// console.log(a, b, c, d);

const gender = null
let profession = "business"

// if (!gender)    {
//     console.log(profession + 'person');
// } else {
//     console.log(profession + gender);
// }

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if ((currentYear - yearOfTeslaPurchase) >= 4)   {
        console.log('would you like an upgrade?');
    } else {
        console.log('are you satisfied with the car?');
    }
} else if (boughtTesla && !isUSCitizen) {
    console.log('would you like to move to the US?');
} else {
    console.log('are you interested in buying a tesla?')
}