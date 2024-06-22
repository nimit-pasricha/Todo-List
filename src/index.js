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
  addNewProjectWithAddButton,
  addProfilePictureToSidebar,
  displayAllProjects,
} from "./sidebar-interface.js";

addProfilePictureToSidebar();
addNewProjectWithAddButton();
displayAllProjects();
