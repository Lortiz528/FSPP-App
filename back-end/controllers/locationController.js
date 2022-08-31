const express = require('express');
const locations = express.Router();

const {
  getAllLocations,
  getLocationByID,
  createLocation,
  updateLocation,
  deleteLocation,
} = require('../queries/locations');

const { capitalizeName } = require('../Validations/validationFuncs');

//Index

locations.get('/', async (req, res) => {
  const allLocations = await getAllLocations();
  if (allLocations) {
    res.status(200).json(allLocations);
  } else {
    res.status(404).send('Something went wrong');
  }
});

//Individual
locations.get('/:id', async (req, res) => {
  const { id } = req.params;
  const oneLocation = await getLocationByID(id);
  if (oneLocation.length > 0) {
    res.status(200).json(oneLocation[0]);
  } else {
    res.status(404).send(`No Location with id of ${id}`);
  }
});

//create
locations.post('/new', async (req, res) => {
  const newLocation = await createLocation(req.body);
  //console.log(newLocation);
  newLocation.store_name = capitalizeName(newLocation.store_name);
  res.status(200).json(newLocation);
});

//update

locations.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLocation = await updateLocation(id, req.body);
    updatedLocation.store_name = capitalizeName(updatedLocation.store_name);
    res.json(updatedLocation);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//delete

locations.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedlocation = await deleteLocation(id);
  if (deletedlocation) {
    res.status(200).json(deletedlocation);
  } else {
    console.log(error.message || error);
    res.status(500).json({ error: 'deletion error' });
  }
});

module.exports = locations;
