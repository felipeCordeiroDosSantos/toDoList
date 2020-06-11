const express = require('express');
const router = express.Router();

const list = require('./list')
const db = require('./db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { list: list.listing() });
});

module.exports = router;

console.log(list.add('Tarefa 1'))
console.log(list.add('Tarefa 2'))
console.log(list.add('Tarefa 3'))
console.log(list.add('Tarefa 4'))
console.log(list.add('Tarefa 5'))
console.log(list.update(1, 'Outra tarefa 2'))
console.log(list.update(3, 'Outra tarefa 4'))
console.log(list.delete(2))