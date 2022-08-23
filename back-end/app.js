// DEPENDENCIES

const express = require('express');
const cors = require('cors');
const amiiboController = require('./controllers/amiiboController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/amiibos', amiiboController);

// ROUTES
app.get('/', (req, res) => {
  res.send('welcome to home inventory');
});

app.get('*', (req, res) => {
  res.status(404).send('Not found!');
});

// EXPORT
module.exports = app;
