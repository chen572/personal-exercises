let chairPrice = 120;

const id = setInterval(() => {
    $.get('/priceCheck/chair', (data) => {

        if (data.price < chairPrice) {

            $.get(`/buy/chair`, (data) => {
                console.log("bought chair for less")
                clearInterval(id)
            });
        } else {
            console.log("still waiting for a price drop...")
        }
    });
}, 3000);



$('button').click(() => {
    const item = $('#item-input').val();
    $.get(`/priceCheck/${item}`, (data) => {
        $('#container').append(`<div class="price"><i class="fas fa-shopping-basket"></i>${item} - ${data.price}</div>`);
    });
});

$('#container').on('click', 'i', (event) => {
    const item = $(event.currentTarget).closest('.price').text().split('-')[0]

    $.get(`/priceCheck/${item}`, (data) => {
        let money = Number($('#money').html())

        if (money >= data.price) {
            $.get(`/buy/${item}`, (data) => {
                $(event.currentTarget).closest('.price').empty().append(`<div>Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.</div>`)
            })

            money -= data.price;
            $('#money').html(`${money}`);
        }
        else {
            $(event.currentTarget).closest('.price').empty().append(`<div>You dont have enough money go get a job</div>`)
        }
    });

})