import { getProjects } from "./projects";

function createTodo(title, description, dueDate, priority, projectName) {
  const projects = getProjects();
  const todo = { title, description, dueDate, priority, isCompleted: false };
  projects[projectName].push(todo);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function deleteTodo(projectName, index) {
  const projects = getProjects();
  projects[projectName].splice(index, 1);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function editTodo(
  projectName,
  index,
  newTitle,
  newDescription,
  newDueDate,
  newPriority
) {
  const projects = getProjects();
  deleteTodo(projectName, index);
  createTodo(newTitle, newDescription, newDueDate, newPriority, projectName);
  localStorage.setItem("projects", JSON.stringify(projects));
}

function changeCompletedStatus(projectName, index) {
  const projects = getProjects();
  const todoToEdit = projects[projectName][index];
  todoToEdit.isCompleted = !todoToEdit.isCompleted;
  localStorage.setItem("projects", JSON.stringify(projects));
}

export { createTodo, deleteTodo, editTodo, changeCompletedStatus };
