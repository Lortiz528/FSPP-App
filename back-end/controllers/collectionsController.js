const express = require('express');
const collections = express.Router();

const {
    getAllCollections,
    getCollectionByID,
    createCollection,
    updateCollection,
    deleteCollection
} = require('../queries/collections');


//Index

collections.get('/', async (req, res) => {
    const allcollections = await getAllCollections();
    if (allcollections) {
      res.json(allcollections);
    } else {
      res.status(404).send('Something went wrong fetching all collections');
    }
  });
  
  //Individual
  collections.get('/:id', async (req, res) => {
    const { id } = req.params;
    const oneCollection = await getCollectionByID(id);
    if (oneCollection) {
      res.status(200).json(oneCollection);
    } else {
      res.status(404).send(`no collection with Id of ${id}`);
    }
  });
  
  //create
  collections.post('/new', async (req, res) => {
    const newCollection = await createCollection(req.body);
    // console.log(newCollection);
    res.status(200).json(newCollection);
  });
  
  //update
  
  collections.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedCollection = await updateCollection(id, req.body);
      res.json(updatedCollection);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });
  
  //delete
  
  collections.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedCollection = await deleteCollection(id);
    if (deletedCollection) {
      res.status(200).json(deletedCollection);
    } else {
      console.log(error.message || error);
      res.status(500).json({ error: 'deletion error' });
    }
  });
  
  module.exports = collections;