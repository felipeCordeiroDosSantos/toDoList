function listToDoList(listTasksText) {
  let listTasksArray = listTasksText
  let toDoList = document.querySelector('#toDoList')
  toDoList.innerHTML = ''
  for (let j = 0; j < listTasksArray.length; j++) {
    let hour = listTasksArray[j].hour.substring(0, 5)
    toDoList.innerHTML += `Tarefa ${j}: ${listTasksArray[j].title}
      | Horario: ${hour}
      <input type="button" value="Deletar" class="delete" onclick="deleteTask(${listTasksArray[j].id})">
      <input type="button" value="Editar" class="edit" onclick="expnadInputEdit(${listTasksArray[j].id})">
      <p id="edit${listTasksArray[j].id}"></p>`
  }
}

function expnadInputEdit(taskIndex) {
  let index = document.querySelector(`#edit${taskIndex}`)
  if (index.innerHTML == '') {
    index.innerHTML += `Editar tarefa: <input type="text" id="task${taskIndex}" class="task"></input>
    Horario: <input type="time" id="hour${taskIndex}" class="hour">
    <input type="button" value="Confirmar" onclick="updateTask(${taskIndex})" class="add">`
  } else {
    index.innerHTML = ''
  }
}

function addTask() {
  let newTask = document.querySelector('#task').value
  let newHour = document.querySelector('#hour').value
  const data = { newTask, newHour }
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

function updateTask(taskIndex) {
  let newTask = document.querySelector(`#task${taskIndex}`).value
  let newHour = document.querySelector(`#hour${taskIndex}`).value
  let index = taskIndex
  const data = { newTask, newHour, index }
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

function deleteTask(taskIndex) {
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

function changeTask() {
  let newTask = document.querySelector('#task').value
  let index = document.querySelector('#index').value
  const data = { newTask, index }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch('/mudar', options)
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
