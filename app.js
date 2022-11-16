const express = require('express');
const app = express();
const router = require('./router');
const welcome = require('./module-practice.js')
const bookData = require('./book-data')

app.use('/', router);
// console.log(welcome('Onkur'));

app.get('/:id', (req, resp) => {
    resp.render('index', {title:bookData.books[req.params.id]['title'], author:bookData.books[req.params.id]['author']})
})

app.set('views', './views');
app.set('view engine', 'pug');
app.listen(3001)