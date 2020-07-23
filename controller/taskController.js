const db = require('../modules/db')
const { change } = require('../modules/db')

function addTask(req, res) {
    const newTask = req.body.newTask
    const newHour = req.body.newHour
    db.addTask(newTask, newHour)
}

function updateTask(req, res) {
    const index = req.body.index
    const newTask = req.body.newTask
    const newHour = req.body.newHour
    db.updateTask(index, newTask, newHour)
}

function deleteTask(req, res) {
    const index = req.body.index
    db.deleteTask(index)
}

module.exports = {
    addTask,
    updateTask,
    deleteTask
}
