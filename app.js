const express = require('express');
const app = express();
const router = require('./routes/index-route')
const welcome = require('./module-practice.js')
const bookData = require('./book-data')
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', router);
console.log(welcome('Onkur'));



app.listen(3001)