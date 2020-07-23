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

router.post('/add', taskController.addTask)

router.put('/update', taskController.updateTask)

router.delete('/delete', taskController.deleteTask)

module.exports = router;
