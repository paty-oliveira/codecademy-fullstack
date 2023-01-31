const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

app.get('/api/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({ quote: randomQuote });
});

app.get('/api/quotes', (req, res) => {
    const personFilter = req.query.person;
    const filterQuotes = quotes.filter(author => {
        return author.person === personFilter;
    })

    if (personFilter) {
        res.send({ quotes: filterQuotes});

    } else {
        res.send({ quotes: quotes });
    }
});

app.post('/api/quotes', (req, res) => {
    const newText = req.query.quote;
    const newAuthor = req.query.person;
    if (newText != '' && newAuthor != '') {
        const newQuote = { quote: newText, person: newAuthor };
        quotes.push(newQuote);
        res.send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
});
