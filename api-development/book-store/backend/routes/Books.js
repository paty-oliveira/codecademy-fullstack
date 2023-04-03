const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

/**
 * A list of all books and their schedules that exist.
 * In a "real" application, this data would be maintained in a database.
 */
let ALL_BOOKS = [
  {
    id: uuidv4(),
    title: 'JavaScript For Dummies',
    start: new Date(2021, 10, 1),
    end: new Date(2021, 10, 5),
  }
];

/**
 * Feature 1: Getting a list of books
 */
router.get("/", (req, res) => {
  res.json(ALL_BOOKS);
});

/**
 * Feature 2: Getting a specific book
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  // Find the restaurant with the matching id.
  const book = ALL_BOOKS.find((book) => book.id === id);

  // If the restaurant doesn't exist, let the client know.
  if (!book) {
    res.sendStatus(404);
    return;
  }

  res.json(book);
});

/**
 * Feature 3: Adding a new book
 */
router.post("/", (req, res) => {
  const { body } = req;
  const { title, start, end } = body;

  // Generate a unique ID for the new book.
  const newId = uuidv4();
  const newBook = {
    id: newId,
    title,
    start: new Date(start),
    end: new Date(end),
  };

  // Add the new book to the list of books.
  ALL_BOOKS.push(newBook);

  res.json(newBook);
});

/**
 * Feature 4: Deleting a book.
 */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const newListOfBooks = ALL_BOOKS.filter(
    (book) => book.id !== id
  );

  // The user tried to delete a book that doesn't exist.
  if (ALL_BOOKS.length === newListOfBooks.length) {
    res.sendStatus(404);
    return;
  }

  ALL_BOOKS = newListOfBooks;

  res.sendStatus(200);
});

/**
 * Feature 5: Updating the title of a book.
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { newTitle, newStart, newEnd } = req.body;

  const book = ALL_BOOKS.find((book) => book.id === id);

  if (!book) {
    res.sendStatus(404);
    return;
  }

  book.title    = newTitle;
  book.start    = newStart;
  book.end      = newEnd;

  res.sendStatus(200);
});

module.exports = router;