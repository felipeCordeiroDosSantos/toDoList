function listToDoList(listTasksText) {
  const listTasksArray = listTasksText
  const toDoList = document.querySelector('#toDoList')
  toDoList.innerHTML = ''
  for (let j = 0; j < listTasksArray.length; j++) {
    const hour = listTasksArray[j].hour.substring(0, 5)
    toDoList.innerHTML += `<li>${listTasksArray[j].title} | Horario: ${hour}
      <input type="button" value="Deletar" class="delete" onclick="deleteTask(${listTasksArray[j].id})">
      <input type="button" value="Editar" class="edit" onclick="expnadInputEdit(${listTasksArray[j].id})">
      <p id="edit${listTasksArray[j].id}"></p></li>`
  }
}

function expnadInputEdit(taskIndex) {
  const index = document.querySelector(`#edit${taskIndex}`)
  if (index.innerHTML == '') {
    index.innerHTML += `Editar tarefa: <input type="text" id="task${taskIndex}" class="task"></input>
    Horario: <input type="time" id="hour${taskIndex}" class="hour">
    <input type="button" value="Confirmar" onclick="updateTask(${taskIndex})" class="add">`
  } else {
    index.innerHTML = ''
  }
}

function addTask() {
  const newTask = document.querySelector('#task').value
  const newHour = document.querySelector('#hour').value
  if (newTask == '' || newHour == '') {
    alert('Campo vazio!')
  }else {
    const data = { newTask, newHour }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/add', options)
    .then(function(res) {
      if (res.status >= 400 && res.status <= 499) {
        alert('Erro no cliente!')
      } else if (res.status >= 500 && res.status <= 599) {
        alert('Erro no servidor!')
      }
    })
    refreshPage()
  }
}

function updateTask(taskIndex) {
  const newTask = document.querySelector(`#task${taskIndex}`).value
  const newHour = document.querySelector(`#hour${taskIndex}`).value
  const index = taskIndex
  if (newTask == '' || newHour == '') {
    alert('Campo vazio!')
  }else {
    const data = { newTask, newHour, index }
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/update', options)
    .then(function(res) {
      if (res.status >= 400 && res.status <= 499) {
        alert('Erro no cliente!')
      } else if (res.status >= 500 && res.status <= 599) {
        alert('Erro no servidor!')
      }
    })
    refreshPage()
  }
}

function deleteTask(taskIndex) {
  const index = taskIndex
  const data = { index }
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  fetch('/delete', options)
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
