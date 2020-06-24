// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
// ]

// for (let fruit of fruits) {
//     $('#basket').append(`<div class="${fruit.color}">${fruit.name}</div>`)
// };

const colorsChildren = $('#colors').children()


for(let pick of colorsChildren) {
    $(pick).addClass('picker').css('background-color', `${$(pick).text()}`);
}


$('#colors').on('click', '.picker', event => { 
    $('.box').css('background-color', `${$(event.currentTarget).text()}`) 
});
