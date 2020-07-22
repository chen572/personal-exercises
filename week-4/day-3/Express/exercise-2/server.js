const express = require('express');
const app = express();
const path = require('path');
const store = require('./storeDB')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', (req, res) => {
    res.send('Server is up and running smoothly')
});

app.get('/priceCheck/:name', (req, res) => {
    let price;
    store.forEach(i => i.name == req.params.name ? price = i.price : false);
    price ? res.send({ price }) : res.send({ price: null });
})

app.get('/buy/:name', (req, res) => {
    store.forEach(i => {
        if (i.name == req.params.name) {
            i.inventory--
            res.send(i)
        }
    })
});

app.get('/sale', (req, res) => {
    if (req.query.admin === 'true') {
        store.forEach((i, idx) => i.inventory > 10 ? store[idx] = { name: i.name, inventory: i.inventory, price: i.price * 0.5 } : i);
        res.send(store);
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});