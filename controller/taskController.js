const db = require('../modules/db')

module.exports = {
    addTask: function(req, res) {
        let newTask = req.body.newTask
        db.add(newTask)
    },

    updateTask: function(req, res) {
        let newTask = req.body.newTask
        let index = req.body.index
        db.update(index, newTask)
    },

    deleteTask: function(req, res) {
        let index = req.body.index
        db.delete(index)
    }
}
