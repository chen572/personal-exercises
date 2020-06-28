// $('button').click(event => {
//     const text = $(event.currentTarget).siblings('span').text()
//     console.log(text);
// })

// $('button').click(event => {
//     const text = $(event.currentTarget).siblings('.container').find('p').text();
//     console.log(text);
// })


const computersIDs = []

$('.generator').click(event => {
    const processorID = $(event.currentTarget).closest('.processor').attr('id');
    const computerDataID = $(event.currentTarget).closest('.computer').data().id;
    const BUSnumber = $(event.currentTarget).closest('.computer').find('.BUS').text();

    console.log(`Processor ID: ${processorID}\nComputer's data-id: ${computerDataID}\nBUS: ${BUSnumber}`);

    computersIDs.push({
        cmp_id: computerDataID
    });
});

$('.validator').click(event => {
    const generatorText = $(event.currentTarget).closest('.computer').find('.generator').text();
    const MB =  $(event.currentTarget).closest('.computer').find('.MB').text();
    const QRs = $(event.currentTarget).closest('.computer').find('.QR').text();

    console.log(`Generator's text: ${generatorText}\nMB: ${MB}\nQRs: ${QRs}`)
})