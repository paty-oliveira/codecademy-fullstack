// require express and it's router component
const express = require('express');
const { create, expenseById, read, update, remove, expenseByDate } = require('../controllers');
const router = express.Router();


// Create POST route to create an expense
router.post('/expense/create', create);

// Create PUT route to update an expense
router.put('/expense/:id', expenseById, update);

// Create DELETE route to remove an expense
router.delete('/expense/:id', remove);

// Create GET route to read an expense
router.get('/expense/:id', expenseById, read);

// Create GET route to read a list of
router.get('/expense/list/:expenseDate', expenseByDate, read);

// Create a callback to handle url params

module.exports = router;
