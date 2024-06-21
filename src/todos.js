import { getProjects } from "./projects";

const projects = getProjects();

function createTodo(title, description, dueDate, priority, projectName) {
  const todo = { title, description, dueDate, priority, isCompleted: false };
  projects[projectName].push(todo);
}

function deleteTodo(projectName, index) {
  projects[projectName].splice(index, 1);
}

function editTodo(projectName, index, propertyToEdit, newValue) {
  projects[projectName][index][propertyToEdit] = newValue;
}

function changeCompletedStatus(projectName, index) {
  projects[projectName][index].isCompleted = !isCompleted;
}

export { createTodo, deleteTodo, editTodo, changeCompletedStatus };
