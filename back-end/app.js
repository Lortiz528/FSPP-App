// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const amiiboController = require('./controllers/amiiboController');
const collectionsController = require('./controllers/collectionsController');
const consoleController = require('./controllers/consoleController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/amiibos', amiiboController);
app.use('/collections', collectionsController);
app.use('/consoles', consoleController);

// ROUTES
app.get('/', (req, res) => {
  res.send('welcome to home inventory');
});

app.get('*', (req, res) => {
  res.status(404).send('Not found!');
});

// EXPORT
module.exports = app;
