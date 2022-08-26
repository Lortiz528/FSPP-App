const express = require('express');
const consoles = express.Router();

const {
  getAllConsoles,
  getConsoleByID,
  createConsole,
  updateConsole,
  deleteConsole,
} = require('../queries/consoles');

//Index

consoles.get('/', async (req, res) => {
  const allconsoles = await getAllConsoles();
  if (allconsoles) {
    res.status(200).json(allconsoles);
  } else {
    res.status(404).send('Something went wrong');
  }
});

//Individual
consoles.get('/:id', async (req, res) => {
  const { id } = req.params;
  const oneConsole = await getConsoleByID(id);
  if (oneConsole.length > 0) {
    res.status(200).json(oneConsole[0]);
  } else {
    res.status(404).send(`No Console with id of ${id}`);
  }
});

//create
consoles.post('/new', async (req, res) => {
  const newConsole = await createConsole(req.body);
  // console.log(newConsole);
  res.status(200).json(newConsole);
});

//update

consoles.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedConsole = await updateConsole(id, req.body);
    res.json(updatedConsole);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//delete

consoles.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedConsole = await deleteConsole(id);
  if (deletedConsole) {
    res.status(200).json(deletedConsole);
  } else {
    console.log(error.message || error);
    res.status(500).json({ error: 'deletion error' });
  }
});

module.exports = consoles;
