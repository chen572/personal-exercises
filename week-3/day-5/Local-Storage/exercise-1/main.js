// let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }

// localStorage.userStorage = JSON.stringify(userStorage);

let wisdome = JSON.parse(localStorage.wisdome || '[]');
let id = wisdome.length;

const renderWisdom = wisdomeArr => {
    $('#container').empty()
    wisdomeArr.forEach(w => {
        $('#container').append(`<div data-id="${w.id}"><span class="delete">X</span>${w.text}</div><br>`);
    })
};

renderWisdom(wisdome);

$('#add').click(() => {
    const input = $('input').val();
    if (input) {
        wisdome.push({ id: id, text: input });

        renderWisdom(wisdome);

        if (wisdome.length % 2 === 0) {
            localStorage.wisdome = JSON.stringify(wisdome);
        };
        id++;
    } else {
        alert('please type something in the input before pressing the button');
    }
});

$('#clear').click(() => {
    localStorage.clear();
    wisdome = JSON.parse(localStorage.wisdome || '[]');

    renderWisdom(wisdome);
    id = wisdome.length;
})

$('#container').on('click', '.delete', event => {
    const idToDelete = $(event.currentTarget).closest('div').data().id;
    wisdome.forEach(w => w.id == idToDelete ? wisdome.splice(wisdome.indexOf(w), 1) : true);
    localStorage.wisdome = JSON.stringify(wisdome);
    renderWisdom(wisdome);
})