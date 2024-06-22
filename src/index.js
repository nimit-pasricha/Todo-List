import {
  addNewProject,
  deleteProject,
  getProjects,
  changeProjectName,
} from "./projects.js";
import {
  createTodo,
  deleteTodo,
  editTodo,
  changeCompletedStatus,
} from "./todos.js";
import "./style.css";
import {
  addNewProjectToSidebar,
  addNewProjectWithAddButton,
  addNewTask,
  addProfilePictureToSidebar,
  addProjectsToForm,
  displayAllProjects,
} from "./sidebar-interface.js";

addNewProjectWithAddButton();
displayAllProjects();
addProfilePictureToSidebar();
addNewProjectToSidebar();
addNewTask();
addProjectsToForm();
