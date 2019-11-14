const db = require('../Database/dbConfig');

module.exports = {
  find
};


function find() {
  return db('languages');
}

