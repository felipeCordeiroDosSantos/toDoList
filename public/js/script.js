function listToDoList(listTasksString) {
  let listTasksArray = listTasksString.split(',')
  let listToDoList = document.querySelector('#toDoList')
  listToDoList.innerHTML = ''
  for (let j = 0; j < listTasksArray.length; j++) {
    listToDoList.innerHTML += `${listTasksArray[j]}  
      <input type="button" value="Deletar" onclick="deleteTaskToDoList(${j})">
      <input type="button" value="Editar" onclick="expnadInputEdit(${j})">
      <p id="edit${j}"></p>`
  }
}

function expnadInputEdit(taskIndex) {
  let index = document.querySelector(`#edit${taskIndex}`)
  index.innerHTML = ''
  index.innerHTML += `<input type="text" id="task${taskIndex}"></input>
    <input type="button" value="Ok" onclick="updateTaskToDoList(${taskIndex})">`
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
  refreshPage()
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
  let editInputs = document.querySelector(`#edit${taskIndex}`)
  editInputs.innerHTML = ''
  refreshPage()
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
  refreshPage()
}

function refreshPage(){
  setTimeout("location.reload(true);",100);
}