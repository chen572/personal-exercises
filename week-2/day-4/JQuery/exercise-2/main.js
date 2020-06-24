// $('button').click(() => {
//     $('#add-to').append(`<li class='lis'>${$('#add-input').val()}</li>`);
//     $('#add-input').val('');
// });

// $('#add-to').on('click', '.lis', function() { $(this).remove() });

let flag = 0;

const div1 = $('<div id="div1" class="box"></div>');
const div2 = $('<div id="div2" class="box"></div>');

$('body').append(div1);
$('body').append(div2);

$(div1).hover(() => {
    const color = flag ? '#8e44ad' : 'red';
    $(div2).css('background-color', color);
    flag = flag ? 0 : 1;
});

$(div2).hover(() => {
    const color = flag ? '#8e44ad' : 'red';
    $(div1).css('background-color', color);
    flag = flag ? 0 : 1;
});
