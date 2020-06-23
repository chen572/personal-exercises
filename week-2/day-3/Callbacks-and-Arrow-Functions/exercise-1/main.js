// let users = []

// const getData = function (func) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         func();
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + 'users')
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

const square = number => number ** 2;

// console.log(square(4))

const getFormalTitle = (title, name) => `${title} ${name}`;

// console.log(getFormalTitle('Madamme', 'Lellouche'))

const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = (func) => { func() }

// pushPull(push) //should print "pushing it!"
// pushPull(pull) //should print "pulling it!"

const time = new Date();

const getTime = func => { func(time) };

const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

// getTime(returnTime)

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};

const logData = data => { console.log(data) };

// displayData(alert, logData, "I like to party");




const add = (a, b, c) => a + b + c;

// console.log(add(5, 5, 5));

const capitalize = name => name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();

// console.log(capitalize("bOb")) // returns Bob
// console.log(capitalize("TAYLOR")) // returns Taylor
// console.log(capitalize("feliSHIA")) // returns Felishia

const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`;

// console.log(commentOnWeather(30)) //returns "It's hot"
// console.log(commentOnWeather(22)) //returns "It's cold"

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc();
    soundFunc(sound);
};

const shineLight = () => document.getElementById('box').style.backgroundColor = 'yellow';
const makeSound = (sound) => alert(sound);

// document.getElementById('box').addEventListener('click', explode(shineLight, makeSound, 'BOOM'));
