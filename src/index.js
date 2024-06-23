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
} from "./sidebar-ui.js";
import { displayProjectInformation } from "./main-content-ui.js";

addNewProjectWithAddButton();
displayAllProjects();
addProfilePictureToSidebar();
addNewProjectToSidebar();
promptUserForNewTask();
addProjectsToForm();
addNewTaskToProject();
restartFormOnExit();
displayProjectInformation();
