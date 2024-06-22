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
    newProjectPrompt.classList.remove("invisible-new-project-prompt");
    newProjectPrompt.className = "new-project-prompt";
  });
}

function displayAllProjects() {
  const projects = getProjects();
  const projectList = document.querySelector(".project-list");

  // delete all children except for new project prompt from the
  // project list
  removeAllButFirstChild(projectList);

  for (let projectName of Object.keys(projects)) {
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
    const newProjectName = document.querySelector("#project-name").value;
    addNewProject(newProjectName);
    displayAllProjects();
  });
}

export {
  addProfilePictureToSidebar,
  addNewProjectWithAddButton,
  displayAllProjects,
  addNewProjectToSidebar,
};
