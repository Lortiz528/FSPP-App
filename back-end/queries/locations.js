const db = require('../db/dbConfig.js');

const getAllLocations = async () => {
  try {
    const locations = await db.any('SELECT * FROM locations');
    return locations;
  } catch (err) {
    return err;
  }
};

const getLocationByID = async (id) => {
  try {
    const location = await db.any('SELECT * FROM locations WHERE id = $1', id);
    return location;
  } catch (err) {
    return err;
  }
};

const createLocation = async (location) => {
  try {
    const newlocation = await db.one(
      'INSERT INTO locations (store_name, address, website, googleMapLink) VALUES($1, $2, $3, $4) RETURNING *',
      [
        location.store_name,
        location.address,
        location.website,
        location.googleMapLink,
      ]
    );
    return newlocation;
  } catch (error) {
    return error;
  }
};

const updateLocation = async (id, location) => {
  try {
    const updatelocation = await db.one(
      'UPDATE locations SET store_name=$1, address=$2, website=$3, googleMapLink=$4, where id=$5 RETURNING *',
      [
        location.store_name,
        location.address,
        location.website,
        location.googleMapLink,
        id,
      ]
    );
    return updatelocation;
  } catch (error) {
    return error;
  }
};

const deleteLocation = async (id) => {
  try {
    const deletedlocation = await db.one(
      'DELETE FROM locations WHERE id=$1 RETURNING *',
      id
    );
    return deletedlocation;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllLocations,
  getLocationByID,
  createLocation,
  updateLocation,
  deleteLocation,
};
