const express = require('express');
const router = express.Router();

const db = require('../modules/db');
const { getDB } = require('../modules/db');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'tdl',
    getDB: db.getDB()
  });
});

router.post('/adicionar', function(req, res, next) {
  console.log(req.body.addVariable)
  let addParameter = req.body.addVariable
  db.add(addParameter)
});

router.put('/editar', function(req, res, next) {
  let upParameterA = req.body.upVariableA
  let upParameterI = req.body.upVariableI
  db.update(upParameterI, upParameterA)
});

router.delete('/deletar', function(req, res, next) {
  console.log(req.body.dellVariable)
  let dellParameter = req.body.dellVariable
  db.delete(dellParameter)
});

module.exports = router;
