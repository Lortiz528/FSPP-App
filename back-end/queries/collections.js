const db = require('../db/dbConfig.js');

const getAllCollections = async () => {
  try {
    const collections = await db.any('SELECT * FROM Collections');
    return collections;
  } catch (err) {
    return err;
  }
};

const getCollectionByID = async (id) => {
  try {
    const collection = await db.any('SELECT * FROM collections WHERE id = $1', id);
    return collection;
  } catch (err) {
    return err;
  }
};

const createCollection = async (collection) => {
  try {
    const newCollection = await db.one(
      'INSERT INTO collections (name, image) VALUES($1, $2) RETURNING *',
      [
        collection.name,
        collection.image,
      ]
    );
    return newCollection;
  } catch (error) {
    return error;
  }
};

const updateCollection = async (id, collection) => {
  try {
    const updatedCollection = await db.one(
      'UPDATE collections SET name=$1, image=$2, where id=$3 RETURNING *',
      [
        collection.name,
        collection.image,
        id,
      ]
    );
    return updatedCollection;
  } catch (error) {
    return error;
  }
};

const deleteCollection = async (id) => {
  try {
    const deletedCollection = await db.one(
      'DELETE FROM collections WHERE id=$1 RETURNING *',
      id
    );
    return deletedCollection;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCollections,
  getCollectionByID,
  createCollection,
  updateCollection,
  deleteCollection
};
