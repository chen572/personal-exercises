// Spot check 1

let car = {
    color: 'red',
    numWheels: 4,
    isFancy: true
};

// console.log(`the ${car.color} car has ${car.numWheels}. ` + (car.isFancy ? 'it is fancy' : 'it is not fancy'));

// Spot check 2

const obj = {
    item: 'a',
    toBeginning: true,
    items: ['b', 'c', 'd']
};

obj.toBeginning ? obj.items.unshift(obj.item) : obj.items.push(obj.item);

// Exercise 1

const p1 = {
    name: 'Chen',
    age: 23,
    city: 'modiin'
};

const p2 = {
    name: 'Tal',
    age: 35,
    city: 'tel aviv'
};

// p1.age == p2.age ? p1.city == p2.city ? console.log(`${p1.name} wants to date ${p2.name}`) : console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`) : console.log('age diffrence was a problem');

// Exercise 2

const myList = [
    {name: 'Chen', age: 23},
    {name:'Tal', age: 35}
];
myList[0].age = 24;
myList.pop();

// console.log(myList);

// Exercise 3

const myList2 = [
    {name: 'Idan', age: 34},
    {name: 'Vlad', age: 29}
];

myList.push(...myList2);

// console.log(myList)

// Exercise 4

const library = {
    books: [
        {title: 'Harry Potter', author: 'J.K Rollings'},
        {title: 'The Hobbit', author: 'Tolkin'}
    ]
};

myList.push(...library.books);

// console.log(myList)

// Exercise 5

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
const name = prompt('Please enter the name for your reservation');

reservations[name.toLowerCase()] ? !reservations[name.toLowerCase()].claimed ? console.log(`Welcome ${name}`) : console.log(`Im sorry ${name} but it seems that someone claimed the reservation already`) : reservations[name.toLowerCase()] = { claimed: true };

// Exercise 6

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;

const raddishExpiry = date - kitchen.fridge.items[1].expiryDate;
const fridgeFixCost = kitchen.fridge.price / 2; 

if (hasOven && fridgeWorks)    {
    console.log(`Geraldine's raddish expired ${raddishExpiry} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`);
} else if (!hasOven && fridgeWorks)    {
    console.log(`Geraldine's raddish expired ${raddishExpiry} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.`);
} else if (hasOven && !fridgeWorks)    {
    console.log(`Geraldine's raddish expired ${raddishExpiry} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay ${fridgeFixCost} to fix the fridge.`);
} else  {
    console.log(`Geraldine's raddish expired ${raddishExpiry} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay ${fridgeFixCost} to fix the fridge.`);
}


