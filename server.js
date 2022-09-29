const express = require('express')
const app = express();
const cors = require('cors')
const { addition, subtraction, multiple } = require('./export')

app.use(cors)

console.log(addition(10, 10));
console.log(subtraction(10, 10));
console.log(multiple(10, 10));

const Global = function (req, res, next) {
    console.log('i am Globalwaer')
    next()
}

app.use(Global)

const Local = function (req, res, next) {
    console.log('i am Localware')
    next()
}

app.get('/', Local, (req, res) => {
    res.send('Simpsle Express')
})

app.get('/sony', Local, (req, res) => {
    res.send('Sony Xperia')
})
app.get('/HTC', Local, (req, res) => {
    res.send('HTC Desire')
})

app.listen(2020, () => {
    console.log('Server Runing')
})