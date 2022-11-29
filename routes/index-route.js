const mongoose = require("mongoose");
const express = require("express");

const Book = require("../models/Book");
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB}@cluster0.f9uqq.mongodb.net/?retryWrites=true&w=majority`
);
const router = express.Router();
const bookData = require("../book-data");

// router.get('/games/:id', (req, resp)=> {
//     resp.send(`Get Route on router ${req.params.id}`)
// })
// router.get('/', (req, resp) => {
//     resp.send('Get Route for home page')
// })
// router.post('/:games/id', (req, resp) => {
//     resp.send(`3rd route ${req.params.games}`)
// })

router.get("/", async (req, resp) => {
  const allBooks = await Book.find();
  resp.send(allBooks);
});
router.get("/create", (req, resp) => {
  resp.render("create");
});
router.post("/create", async (req, resp) => {
  // bookData.books.push(req.body)
  await Book.create(req.body);
  resp.redirect("/");
});
router.get("/about", (req, resp) => {
  resp.send(bookData.books);
});
router.get("/update/:id", (req, resp) => {
  const book = bookData.books.filter((book) => book.isbn === req.params.id);
  resp.render("index", {
    isbn: book[0].isbn,
    title: book[0].title,
    subtitle: book[0].subtitle,
    author: book[0].author,
    published: book[0].published,
    publisher: book[0].publisher,
    pages: book[0].pages,
    description: book[0].description,
    website: book[0].website,
  });
});
router.post("/delete/:id", async (req, resp) => {
  try {
    await Book.deleteOne({ isbn: req.params.id });
    resp.redirect("/");
  } catch (e) {
    console.log(e);
  }
});
router.get("/delete/:id", async (req, resp) => {
  const book = await Book.find({ isbn: Number(req.params.id) });
  resp.render("delete", book[0]);
});
router.get("/:id", async (req, resp) => {
  const book = await Book.find({ isbn: req.params.id });
  const {
    isbn,
    title,
    subtitle,
    author,
    publisher,
    published,
    pages,
    description,
    website,
  } = book[0];
  resp.render("index", {
    isbn: isbn,
    title: title,
    subtitle: subtitle,
    publisher: publisher,
    author: author,
    pages: pages,
    description: description,
    published: published,
    website: website,
  });
});
router.post("/update/:id", async (req, resp) => {
  const updatedBook = await bookData.books.filter(
    (book) => book.isbn === req.params.id
  );
  (updatedBook[0].isbn = req.body.isbn),
    (updatedBook[0].title = req.body.title),
    (updatedBook[0].subtitle = req.body.subtitle),
    (updatedBook[0].author = req.body.author),
    (updatedBook[0].published = req.body.published),
    (updatedBook[0].publisher = req.body.publisher),
    (updatedBook[0].pages = req.body.pages),
    (updatedBook[0].description = req.body.description),
    (updatedBook[0].website = req.body.website);

  resp.redirect(`/${updatedBook[0].isbn}`);
});
module.exports = router;
