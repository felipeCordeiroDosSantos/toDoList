const knex = require('./knex')
const { where } = require('./knex')

let list = []

function clearList() {
    list = []
}

function populate() {
    knex.select(['id', 'title', 'hour']).table('task').orderBy('hour', 'asc')
    .then(function (data){
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            list.push(data[i])
        }
    }).catch(function (error){
        console.log(error)
    }).then( function (){})
}

function getDB() {
    return list
}

function addTask(task, hour) {
    let newtask = {
        title: task,
        hour: hour,
        id_user: 1
    }
    
    knex.insert(newtask).into('task')
    .then(function (data){
        console.log(data)  
    }).catch(function (error) {
        console.log(error)
    }).then( function (){
        clearList()
        populate()
    })
    
}

function updateTask(index, task, hour) {
    knex.where({id: index}).update({title: task, hour: hour}).table('task')
    .then(function (data){
        console.log(data)  
    }).catch(function (error) {
        console.log(error)
    }).then( function (){
        clearList()
        populate()
    })
}   

function deleteTask(index) {
    knex.where({id: index}).delete().table('task')
    .then(function(data){
        console.log(data)
    }).catch(function(error){
        console.log(error)
    }).then( function (){
        clearList()
        populate()
    })
}

module.exports = {
    populate,
    getDB,
    addTask,
    updateTask,
    deleteTask
}
