const container = document.getElementById('container')

const changeColor = function (box) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

for (let i = 0; i < 6; i++) {
    const box = document.createElement('div')
    box.setAttribute('class', 'box')
    box.style.backgroundColor = changeColor(box);
    box.setAttribute('onmouseover', 'changeColor(this)');
    container.appendChild(box);
}

