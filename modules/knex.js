const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'rootpasswordgiven',
      database : 'toDoList'
    }
  });

  module.exports = knex;