//selector
const todoInput = document.getElementById("idInput");
const todoButton = document.getElementById("idButton");
const todoList = document.getElementById("idList");
const todoContainer = document.getElementById("idContainer");

//event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener ("click" , deletecheck);

//function
function addTodo (event) {
event.preventDefault()
//Create div & Li
const todoDiv = document.createElement('div')
todoDiv.classList.add ('todo_div')
const todoLi = document.createElement('li')
todoLi.innerText = todoInput.value  
todoLi.classList.add ('todo_li')
todoDiv.appendChild (todoLi)
//Mark Button
const checkButton = document.createElement('button')
checkButton.innerHTML = `<i class="fas fa-check"></i>`
checkButton.classList.add('check_button')
todoDiv.appendChild (checkButton)
//Dell Button
const dellButton = document.createElement('button')
dellButton.innerHTML = `<i class="fas fa-trash"></i>`
dellButton.classList.add('dell_button')
todoDiv.appendChild (dellButton)
//appendToList
idList.appendChild (todoDiv)
}

function deletecheck (e) {
const dellItem = e.target;
console.log(dellItem);

if (dellItem.classList[0] === 'dell_button'){
  const delit = dellItem.parentElement;
  delit.remove();
}
}