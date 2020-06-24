const cartItems = []

const render = () => {
    $('#cart').empty();

    const checkForMore = {}

    for (let item of cartItems) {
        if (checkForMore[item]) {
            checkForMore[item]++;
        } else {
            checkForMore[item] = 1;
        }
    }

    for (let item in checkForMore) {
        if (checkForMore[item] > 1) {
            $('#cart').append(`<div class=cart-item>${item} x${checkForMore[item]}</div>`);
        } else {
            $('#cart').append(`<div class=cart-item>${item}</div>`);
        }
    }
}

$('.item').click(event => {
    if ($(event.currentTarget).data().instock) {
        cartItems.push($(event.currentTarget).text())
        render();
    }
});

$('#cart').on('click', '.cart-item', event => {
    cartItems.splice(cartItems.indexOf($(event.currentTarget).text()), 1)
    render();
});

