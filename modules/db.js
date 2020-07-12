let list = [0]

function populate() {
    for (let i = 1; i <= 10; i++) {
        this.addTask(`Fazer ${i}`)
    }
}

function getDB() {
    return list
}

function addTask(task) {
    list.push(String(task))
}

function updateTask(index, task) {
    list[index] = task
}

function deleteTask(index) {
    list.splice(index, 1)
}

function changeTask(index, task) {
    list.splice(index, 0, task)
}

module.exports = {
    populate,
    getDB,
    addTask,
    updateTask,
    deleteTask,
    changeTask
}
