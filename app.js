const express = require('express');
const app = express();
const router = require('./routes/index-route')
const bookRouter = require('./routes/book-route')
const welcome = require('./module-practice.js')
const bookData = require('./book-data')
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/', router);
console.log(welcome('Onkur'));
app.use('/books', bookRouter);

app.get('/:id', (req, resp) => {
    resp.render('index', {title:bookData.books[req.params.id]['title'], author:bookData.books[req.params.id]['author']})
})


app.listen(3001)