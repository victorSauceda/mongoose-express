const express = require('express');
const router = express.Router();
const bookData = require('../book-data')

// router.get('/games/:id', (req, resp)=> {
//     resp.send(`Get Route on router ${req.params.id}`)
// })
// router.get('/', (req, resp) => {
//     resp.send('Get Route for home page')
// })
// router.post('/:games/id', (req, resp) => {
//     resp.send(`3rd route ${req.params.games}`)
// })

router.get('/', (req, resp) => {
    resp.send(bookData.books)
})
router.get('/about', (req, resp) => {
    resp.send(bookData.books)
})

router.delete('/:id', (req, resp) => {
    resp.send(`Book ${req.params.id} has been successfully deleted!`);
})

router.put('/:id', (req, resp) => {
    const updatedBook = bookData.books.filter((book)=> book.isbn === req.params.id)
    resp.send(`${updatedBook[0].title} has been updated successfully.`);
  })
module.exports = router