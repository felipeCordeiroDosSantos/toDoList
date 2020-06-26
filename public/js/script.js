function listToDoList(listTasksString) {
  let listTasksArray = listTasksString.split(',')
  let listTasks = document.querySelector('#listTasks')
  listTasks.innerHTML = ''
  for (let j = 0; j < listTasksArray.length; j++) {
    listTasks.innerHTML += `${listTasksArray[j]}  
    <input type="button" value="Deletar" onclick="deleteTaskToDoList(${j})">
    Editar:
    <input type="text" id="task${j}">
    <input type="button" value="Ok" onclick="updateTaskToDoList(${j})">
    <br><br>`
  }
}

function addTaskToDoList() {
  let newTask = document.querySelector('#task').value
  const data = { newTask }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch('/adicionar', options)
}

function updateTaskToDoList(taskIndex) {
  let newTask = document.querySelector(`#task${taskIndex}`).value
  let index = taskIndex
  const data = { newTask, index }
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch('/editar', options)
}

function deleteTaskToDoList(taskIndex) {
  let index = taskIndex
  const data = { index }
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch('/deletar', options)
}
