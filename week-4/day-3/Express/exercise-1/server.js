const express = require('express');
const app = express();
const path = require('path');

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/books/:bookID', (req, res) => {
    res.send(data[req.params.bookID]);
})

app.get('/', (req, res) => {
    console.log('someone has entered my server')
    res.send('cya')
})

app.get('/life', (req, res) => {
    res.send('42');
})

app.get('/user/:userID', (req, res) => {
    res.send(users[req.params.userID]);
})

app.get('/details', (req, res) => {
    let params = req.query;
    console.log(params.city)
    res.send(params)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});