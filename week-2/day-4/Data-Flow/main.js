const posts = [
    {name: 'Chen', text: 'texttexttext'},
    {name: 'Tal', text: 'texttexttext'},
    {name: 'Gal', text: 'texttexttext'}
];

const render = () => {
    $('#container').empty();

    for (let post of posts) {
        const divToAdd = `<div>${post.name}<br>${post.text}</div>`
        $('#container').append(divToAdd);
    }
};

$('#submit').click(() => {
    const name = $('#name').val();
    const text = $('#text').val();

    console.log(name, text)
    posts.push({
        name: name,
        text: text
    });

    render();
});

render()