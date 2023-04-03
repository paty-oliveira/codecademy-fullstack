import React, { useState, useEffect } from "react";
import CalendarComponent from './Calendar';
import Book from './Book';
import {
  getBooks,
  addNewBook
} from '../api/books';

// Material UI
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'
import Stack from '@mui/material/Stack';

import '../App.css';

const BookSchedule = () => {
  // GET from API
  const [books, setBooks] = useState([]);

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  // State to add a new book
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookStart, setNewBookStart] = useState(startDate);
  const [newBookEnd, setNewBookEnd] = useState(endDate);

  // Fetch Data from API
  useEffect(() => {
    async function fetchData() {
      const booksData = await getBooks();
      setBooks(booksData);
    }
    fetchData();
  }, []);
      
  // Add a new book to the list
  const onAddNewBook = async () => {
    const newBook = await addNewBook(newBookTitle, newBookStart, newBookEnd);

    setBooks((previousBooks) => [
      ...previousBooks,
      newBook,
    ]);
  };



  // Map through the array of books and create a list item for them
  const bookTitle = books.map((book) => {
    return (
      <Book  
      bookId={book.id}
      bookTitle={book.title}
      bookStart={book.start}
      bookEnd={book.end}
      setBooks={setBooks}
      />
    )
  
  });

  return (
    <div>
      <CalendarComponent events={books} />
        <h3>Add a New Book to Read!</h3>
        <div className={'add-new'}>
          <form onSubmit={() => {onAddNewBook()}}>
              <Stack spacing={2}>
                  <TextField id="standard-basic"
                             required
                             label="Add Book Title"
                             variant="standard"
                             onChange={e => setNewBookTitle(e.target.value)}
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                          label="Start Date"
                          openTo="day"
                          views={['year', 'month', 'day']}
                          value={startDate}
                          onChange={(newValue) => {
                              setStartDate(newValue);
                              setNewBookStart(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                      />
                      <DatePicker
                          label="End Date"
                          openTo="day"
                          views={['year', 'month', 'day']}
                          value={endDate}
                          onChange={(newValue) => {
                              setEndDate(newValue);
                              setNewBookEnd(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                      />
                  </LocalizationProvider>
                  <Button variant="contained" type="submit">
                      Add Book
                  </Button>
              </Stack>
          </form>
        </div>
        <div className={'existing-books'}>
          <h3>Existing Book Schedules</h3>
          <List>
            {bookTitle}
          </List>
        </div>
    </div>
  )
}

export default BookSchedule;