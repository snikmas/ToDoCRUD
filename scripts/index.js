// you write a task and it outputs there
// and tasks saves in the db

const inputTask = document.querySelector('#addTask')
const inputBtn = document.querySelector('#add')
const ulList = document.querySelector('.taskList')
const removeBtns = document.querySelectorAll('.remove')

inputBtn.addEventListener('click', addTaskBtn);

function addTaskBtn(event) {
  event.preventDefault()
  
  if (inputTask.value.trim() !== "") {
    addToTheList(inputTask.value);
    inputTask.value = ""; // Clear input
  }
}

// here we will output 
// also need to show to server
function addToTheList(task){
  const newLiTask = document.createElement("li");
  newLiTask.innerHTML = `
  <div><input type="checkbox" name="taskDone" class="taskDone"><label for="taskDone">${task}</label></div><button class="remove"><img src="/remove.svg"></button>
  `;
  ulList.appendChild(newLiTask);
}

ulList.addEventListener('click', (event) => {
  if(event.target.closest('.remove')) {
    event.target.closest('li').remove()
  }
})