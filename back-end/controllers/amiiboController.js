const express = require('express');
const amiibos = express.Router();

const {
  getAllAmiibos,
  getAmiiboByID,
  createAmiibo,
  updateAmiibo,
  deleteAmiibo,
} = require('../queries/amiibos');


//Index

amiibos.get('/', async (req, res) => {
    const allAmiibos = await getAllAmiibos();
    if (allAmiibos) {
      res.json(allAmiibos);
    } else {
      res.status(404).send('Something went wrong');
    }
  });
  
  //Individual
  amiibos.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneAmiibo = await getAmiiboByID(id);
    if (oneAmiibo) {
      res.status(200).json(oneAmiibo);
    } else {
      res.status(404).send(`No song with id of ${id}`);
    }
  });
  
  //create
  amiibos.post('/new', async (req, res) => {
    const newAmiibo = await createAmiibo(req.body);
    // console.log(newAmiibo);
    res.status(200).json(newAmiibo);
  });
  
  //update
  
  amiibos.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedAmiibo = await updateAmiibo(id, req.body);
      res.json(updatedAmiibo);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  //delete
  
  amiibos.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteAmiibo(id);
    if (deletedSong) {
      res.status(200).json(deletedSong);
    } else {
      console.log(error.message || error);
      res.status(500).json({ error: 'deletion error' });
    }
  });
  
  module.exports = amiibos;