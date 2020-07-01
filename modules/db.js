let list = [0]

function populate() {
    for (let i = 1; i <= 10; i++) {
        this.add(`Tarefa: ${i}`)
    }
}

function getDB() {
    return list
}

module.exports = {
    populate,
    getDB,
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
