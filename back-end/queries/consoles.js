const db = require('../db/dbConfig.js');

const getAllConsoles = async () => {
  try {
    const consoles = await db.any('SELECT * FROM consoles');
    return consoles;
  } catch (err) {
    return err;
  }
};

const getConsoleByID = async (id) => {
  try {
    const console = await db.any('SELECT * FROM consoles WHERE id = $1', id);
    return console;
  } catch (err) {
    return err;
  }
};

const createConsole = async (console) => {
  try {
    const newconsole = await db.one(
      'INSERT INTO consoles (name, brand, quantity, color, has_box, is_sealed, image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        console.name,
        console.brand,
        console.quantity,
        console.color,
        console.has_box,
        console.is_sealed,
        console.image
      ]
    );
    return newconsole;
  } catch (error) {
    return error;
  }
};

const updateConsole = async (id, console) => {
  try {
    const updateconsole = await db.one(
      'UPDATE consoles SET name=$1, brand=$2, quantity=$3, color=$4, has_box=$5, is_sealed=$6, image=$7 where id=$8 RETURNING *',
      [
        console.name,
        console.brand,
        console.quantity,
        console.color,
        console.has_box,
        console.is_sealed,
        console.image,
        id,
      ]
    );
    return updateconsole;
  } catch (error) {
    return error;
  }
};

const deleteConsole = async (id) => {
  try {
    const deletedconsole = await db.one(
      'DELETE FROM consoles WHERE id=$1 RETURNING *',
      id
    );
    return deletedconsole;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllConsoles,
  getConsoleByID,
  createConsole,
  updateConsole,
  deleteConsole
};
