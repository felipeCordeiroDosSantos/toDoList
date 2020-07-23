const db = require('../modules/db')
const { change } = require('../modules/db')

function addTask(req, res) {
    let newTask = req.body.newTask
    let newHour = req.body.newHour
    db.addTask(newTask, newHour)
}

function updateTask(req, res) {
    let index = req.body.index
    let newTask = req.body.newTask
    let newHour = req.body.newHour
    console.log(newTask)
    console.log(newHour)
    db.updateTask(index, newTask, newHour)
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
