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
  addNewTaskToProject,
  addProfilePictureToSidebar,
  addProjectsToForm,
  displayAllProjects,
  promptUserForNewTask,
  restartFormOnExit,
} from "./sidebar-interface.js";

addNewProjectWithAddButton();
displayAllProjects();
addProfilePictureToSidebar();
addNewProjectToSidebar();
promptUserForNewTask();
addProjectsToForm();
addNewTaskToProject();
restartFormOnExit();
