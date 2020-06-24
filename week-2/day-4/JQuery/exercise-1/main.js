const divB1 = $('#b1');
const divB2 = $('#b2');

divB1.addClass('box');
divB2.addClass('box');

// $('#my-input').val('Terabyte');

const dataArr = $('#grab-data').data();
console.log(`The item with barcode ${dataArr.barcode} will expire on ${dataArr.expirationdate}`);

// $('.box').hover(event => {
//     $(event.currentTarget).css('background-color', 'blue');
// });

$('button').click(() => {
    alert($('#my-input').val());
});

$(".feedme").on("click", function () {
    let divCopy = `<div class="feedme">${$(this).text()}</div>`

    $("body").append(divCopy)
});

const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
]

for (let name of names) {
    $('body').append(`<div>${name.first}-${name.last}</div>`);
}

$('.box').hover(function () {
    $('div').remove('.box');
})

$('button').click(() => {
    $('#blogs').append('<div class="blog">kaffr</div>')
});

$('#blogs').on('click', '.blog', (event) => {
    $(event.currentTarget).text('blargh')
    console.log(this)
});