const express = require('express');
const router = express.Router();

const db = require('../modules/db');
const { getDB } = require('../modules/db');

const taskController = require('../controller/taskController')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {
    list: db.getDB()  
  });
});

router.post('/adicionar', taskController.addTask)

router.put('/editar', taskController.updateTask)

router.delete('/deletar', taskController.deleteTask)

router.post('/mudar', taskController.changeTask)

module.exports = router;
