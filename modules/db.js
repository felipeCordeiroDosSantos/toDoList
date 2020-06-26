let list = []

module.exports = {
    populate: function() {
        for (let i = 1; i <= 10; i++) {
            this.add(`Tarefa: ${i}`)
        }
    },

    getDB: function() {
        return list
    },

    add: function(task) {
        list.push(String(task))
    },

    update: function(index, task) {
        list[index] = task
    },

    delete: function(index) {
        list.splice(index, 1)
    }
}
