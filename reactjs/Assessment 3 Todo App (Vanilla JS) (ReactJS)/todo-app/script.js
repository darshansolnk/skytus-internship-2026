const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const error = document.getElementById("error");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

/* ---------- SAVE TO LOCALSTORAGE ---------- */
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

/* ---------- RENDER TODOS (DOM MANIPULATION) ---------- */
function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("completed");

    li.innerHTML = `
      <span class="text">${todo.text}</span>
      <div class="actions">
        <button class="complete" data-id="${index}">✔</button>
        <button class="edit" data-id="${index}">✏</button>
        <button class="delete" data-id="${index}">🗑</button>
      </div>
    `;

    list.appendChild(li);
  });
}

/* ---------- ADD TODO ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();

  // Error Handling
  if (text === "") {
    error.textContent = "Task cannot be empty!";
    return;
  }

  error.textContent = "";

  todos.push({ text, completed: false });
  input.value = "";

  saveTodos();
  renderTodos();
});

/* ---------- EVENT DELEGATION ---------- */
list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id === undefined) return;

  // COMPLETE TASK
  if (e.target.classList.contains("complete")) {
    todos[id].completed = !todos[id].completed;
  }

  // DELETE TASK
  if (e.target.classList.contains("delete")) {
    todos.splice(id, 1);
  }

  // EDIT TASK
  if (e.target.classList.contains("edit")) {
    const newText = prompt("Edit your task:", todos[id].text);

    if (newText === null || newText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    todos[id].text = newText;
  }

  saveTodos();
  renderTodos();
});

/* ---------- LOAD SAVED TODOS ---------- */
renderTodos();
