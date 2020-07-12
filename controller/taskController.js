const db = require('../modules/db')
const { change } = require('../modules/db')

module.exports = {
    addTask: function(req, res) {
        let newTask = req.body.newTask
        db.addTask(newTask)
    },
    updateTask: function(req, res) {
        let newTask = req.body.newTask
        let index = req.body.index
        db.updateTask(index, newTask)
    },
    deleteTask: function(req, res) {
        let index = req.body.index
        db.deleteTask(index)
    },
    changeTask: function(req, res) {
        let newTask = req.body.newTask
        let index = req.body.index
        db.changeTask(index, newTask)
    }
}
