const express = require('express');
const router = express.Router();

const db = require('../modules/db');
const { getDB } = require('../modules/db');

const controllerRoutes = require('../controller/controllerRoutes')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'tdl',
    getDB: db.getDB()
  });
});

router.post('/adicionar', controllerRoutes.routeAdd)

router.put('/editar', controllerRoutes.routeUp)

router.delete('/deletar', controllerRoutes.routeDell)

module.exports = router;
