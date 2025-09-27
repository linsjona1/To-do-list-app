// Autofocus the input when the page loads
window.addEventListener('DOMContentLoaded', function() {
   const inputElement = document.querySelector('input');
   inputElement.focus();
});
let todoList =  JSON.parse(localStorage.getItem('todoList'))||[] ;
let todo = "";
renderTodoList();


function renderTodoList(){
   todo = "";
   //FOREACH LOOP
      todoList.forEach((todoobject, index)=>{
      let {name} = todoobject;
      let  {duedate} = todoobject;
      let firstLetter = name.charAt(0);
      let toUpper = firstLetter.toLocaleUpperCase();
      name = toUpper + name.slice(1);
      if(name ||duedate){   
      const html = `
      <div class="Todo-name">${name}</div>
      <div class="todo-date">${duedate}</div>    
      <button onclick="
      deleteTodo(${index})
      "class = "deleteElement">Delete
         </button>
         <button class="editElement" onclick="editTodo(${index})">Edit</button>
      
         `;
      todo += html;
      }})

 localStorage.setItem("todoList", JSON.stringify(todoList))

document.querySelector(".container").innerHTML = todo;


}
function deleteTodo(index){
todoList.splice(`${index}`, 1);
renderTodoList();
}

function editTodo(index){
   let deleted = todoList.splice(`${index}`, 1);
   console.log(index)
   deleted.forEach((todo)=>{
   document.querySelector("input").value= todo.name
   document.querySelector(".dateElement").value = todo.duedate
   })
   
   renderTodoList();

   
}



   function gettodo(){
   let inputElement = document.querySelector("input");
   let text = inputElement.value;

   const dateElement = document.querySelector(".dateElement");
   const date = dateElement.value;
   
   if(text || date){
   todoList.push({name:text, duedate: date});
   inputElement.value = "";
   dateElement.value = "";
   }

   renderTodoList();
   }
   
   function enter(event){
      if(event.key ==='Enter'){
         gettodo();
      }
   }
   document.querySelector('.addBtn').addEventListener('click', ()=>{
      gettodo();
   })

// Add dark mode toggle button
document.addEventListener('DOMContentLoaded', function() {
  let btn = document.createElement('button');
  btn.className = 'toggle-dark';
  btn.innerText = '🌙 Toggle Dark Mode';
  btn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    // Save preference
    if(document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'on');
    } else {
      localStorage.setItem('darkMode', 'off');
    }
  };
  document.body.appendChild(btn);

  // Load preference
  if(localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
  }
});

