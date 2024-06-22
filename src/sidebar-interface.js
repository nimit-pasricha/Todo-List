import pfp from "./images/cat-pfp.png";
import { getProjects, addNewProject } from "./projects";

function addProfilePictureToSidebar() {
  const profilePicture = new Image();
  profilePicture.src = pfp;
  profilePicture.alt = "image of very round cat holding a yarn ball";
  profilePicture.className = "cat-pfp";

  const userInfo = document.querySelector(".user-info");
  userInfo.insertBefore(profilePicture, userInfo.firstChild);
}

function addNewProjectWithAddButton() {
  const addProjectButton = document.querySelector(".add-project-button");
  addProjectButton.addEventListener("click", () => {
    const newProjectPrompt = document.querySelector(
      ".invisible-new-project-prompt"
    );
    makeNewProjectPromptVisible(newProjectPrompt);

    // switch focus to input element
    document.querySelector("#project-name").focus();
  });
}

function makeNewProjectPromptVisible(newProjectPrompt) {
  newProjectPrompt.classList.remove("invisible-new-project-prompt");
  newProjectPrompt.className = "new-project-prompt";
}

function displayAllProjects() {
  const projects = getProjects();
  const projectList = document.querySelector(".project-list");

  // delete all children except for new project prompt from the
  // project list
  removeAllButFirstChild(projectList);

  for (let projectName of Object.keys(projects).reverse()) {
    const projectListItem = projectList.appendChild(
      document.createElement("li")
    );
    const projectButton = projectListItem.appendChild(
      document.createElement("button")
    );
    projectButton.textContent = projectName;
  }
}

function removeAllButFirstChild(parentNode) {
  while (parentNode.childNodes.length > 1) {
    parentNode.removeChild(parentNode.lastChild);
  }
}

function addNewProjectToSidebar() {
  const createNewProjectButton = document.querySelector(
    ".create-new-project-button"
  );
  createNewProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    const newProject = document.querySelector("#project-name");

    const newProjectName = newProject.value;
    addNewProject(newProjectName);
    displayAllProjects();

    // empty newProject input field to make space for next input
    newProject.value = "";

    // hide the prompt
    const newProjectPrompt = document.querySelector(".new-project-prompt");
    makeNewProjectPromptInvisible(newProjectPrompt);
  });
}

function makeNewProjectPromptInvisible(newProjectPrompt) {
  newProjectPrompt.classList.remove("new-project-prompt");
  newProjectPrompt.className = "invisible-new-project-prompt";
}

function addProjectsToForm() {
  const projects = getProjects();
  const projectNameDatalist = document.querySelector(".project-name-datalist");
  Object.keys(projects)
    .reverse()
    .forEach((projectName) => {
      const option = projectNameDatalist.appendChild(
        document.createElement("option")
      );
      option.value = projectName;
    });
}

// TODO: Prevent user from entering only whitespace project names
// TODO: Prevent user from entering already-existing project names

export {
  addProfilePictureToSidebar,
  addNewProjectWithAddButton,
  displayAllProjects,
  addNewProjectToSidebar,
};
