let list = []

module.exports = {
    populate: function() {
        for (let i = 1; i <= 10; i++) {
            this.add(`Tarefa ${i}`)
        }
    },

    getDB: function() {
        return list
    },

    add: function(tarefa) {
        list.push(String(tarefa))
    },

    update: function(indice, tarefa) {
        list[indice] = tarefa
    },

    delete: function(indice) {
        list.splice(indice, 1)
    }
}
