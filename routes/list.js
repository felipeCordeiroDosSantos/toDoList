const db = require('./db')

module.exports = {
    add: function(tarefa) {
        return db.push(String(tarefa))
    },

    update: function(indice, tarefa) {
        return db[indice] = tarefa
    },

    delete: function(indice) {
        return db.splice(indice, 1)
    },

    listing: function(indice) {
        return db
    }
}
