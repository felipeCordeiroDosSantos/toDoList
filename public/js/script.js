function listToDoList(listTasksText) {
  let listTasksArray = listTasksText.split(',')
  let toDoList = document.querySelector('#list')
  toDoList.innerHTML = ''
  for (let j = 1; j < listTasksArray.length; j++) {
    toDoList.innerHTML += `${listTasksArray[j]}  
      <input type="button" value="Deletar" class="delete" onclick="deleteTaskToDoList(${j})">
      <input type="button" value="Editar" class="edit" onclick="expnadInputEdit(${j})">
      <p id="edit${j}"></p>`
  }
}

function expnadInputEdit(taskIndex) {
  let index = document.querySelector(`#edit${taskIndex}`)
  index.innerHTML = ''
  index.innerHTML += `Editar tarefa: <input type="text" id="task${taskIndex}"></input>
    <input type="button" value="Confirmar" onclick="updateTaskToDoList(${taskIndex})">`
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
  .then(function(res) {
    if (res.status >= 400 && res.status <= 499) {
      alert('Erro no cliente!')
    } else if (res.status >= 500 && res.status <= 599) {
      alert('Erro no servidor!')
    }
  })
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
  .then(function(res) {
    if (res.status >= 400 && res.status <= 499) {
      alert('Erro no cliente!')
    } else if (res.status >= 500 && res.status <= 599) {
      alert('Erro no servidor!')
    }
  })
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
  .then(function(res) {
    if (res.status >= 400 && res.status <= 499) {
      alert('Erro no cliente!')
    } else if (res.status >= 500 && res.status <= 599) {
      alert('Erro no servidor!')
    }
  })
  refreshPage()
}

function refreshPage(){
  setTimeout("location.reload(true);",100);
}
