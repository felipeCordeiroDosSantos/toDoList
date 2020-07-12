const db = require('../modules/db')
const { change } = require('../modules/db')

function addTask(req, res) {
    let newTask = req.body.newTask
    db.addTask(newTask)
}

function updateTask(req, res) {
    let newTask = req.body.newTask
    let index = req.body.index
    db.updateTask(index, newTask)
}

function deleteTask(req, res) {
    let index = req.body.index
    db.deleteTask(index)
}

function changeTask(req, res) {
    let newTask = req.body.newTask
    let index = req.body.index
    db.changeTask(index, newTask)
}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    changeTask
}
