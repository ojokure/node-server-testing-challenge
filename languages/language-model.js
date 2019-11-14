const db = require('../Database/dbConfig');



module.exports = {
  find,
  getById,
  insert,
  update,
  remove,
};


function find() {
    return db('languages');
  }


function getById(id) {
  return db('languages')
    .where({ id })
    .first();
}

function insert(language) {
  return db('languages')
    .insert(language)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('languages')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('languages')
    .where('id', id)
    .del();
}
