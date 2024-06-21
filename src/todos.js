import { getProjects } from "./projects";

const projects = getProjects();

function getTodo(projectName, index) {
  return projects[projectName][index];
}

function createTodo(title, description, dueDate, priority, projectName) {
  const todo = { title, description, dueDate, priority, isCompleted: false };
  projects[projectName].push(todo);
}

function deleteTodo(projectName, index) {
  projects[projectName].splice(index, 1);
}

function editTodo(projectName, index, newTitle, newDescription, newDueDate, newPriority) {
  deleteTodo(projectName, index);
  createTodo(newTitle, newDescription, newDueDate, newPriority, projectName);
}

function changeCompletedStatus(projectName, index) {
  const todoToEdit = getTodo(projectName, index);
  todoToEdit.isCompleted = !todoToEdit.isCompleted;
}

export { createTodo, deleteTodo, editTodo, changeCompletedStatus };
