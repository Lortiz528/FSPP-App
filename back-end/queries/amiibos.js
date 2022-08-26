const db = require('../db/dbConfig.js');

const getAllAmiibos = async () => {
  try {
    const amiibos = await db.any('SELECT * FROM amiibos');
    return amiibos;
  } catch (err) {
    return err;
  }
};

const getAmiiboByID = async (id) => {
  try {
    const amiibo = await db.any('SELECT * FROM amiibos WHERE id = $1', id);
    return amiibo;
  } catch (err) {
    return err;
  }
};

const createAmiibo = async (amiibo) => {
  try {
    const newAmiibo = await db.one(
      'INSERT INTO amiibos (name, series, is_boxed, quantity, image) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [
        amiibo.name,
        amiibo.series,
        amiibo.is_boxed,
        amiibo.quantity,
        amiibo.image,
      ]
    );
    return newAmiibo;
  } catch (error) {
    return error;
  }
};

const updateAmiibo = async (id, amiibo) => {
  try {
    const updateAmiibo = await db.one(
      'UPDATE amiibos SET name=$1, series=$2, is_boxed=$3, quantity=$4, image=$5 where id=$6 RETURNING *',
      [
        amiibo.name,
        amiibo.series,
        amiibo.is_boxed,
        amiibo.quantity,
        amiibo.image,
        id,
      ]
    );
    return updateAmiibo;
  } catch (error) {
    return error;
  }
};

const deleteAmiibo = async (id) => {
  try {
    const deletedAmiibo = await db.one(
      'DELETE FROM amiibos WHERE id=$1 RETURNING *',
      id
    );
    return deletedAmiibo;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAmiibos,
  getAmiiboByID,
  createAmiibo,
  updateAmiibo,
  deleteAmiibo
};
