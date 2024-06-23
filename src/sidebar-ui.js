import pfp from "./images/cat-pfp.png";
import { displayProjectInformation } from "./main-content-ui";
import { getProjects, addNewProject } from "./projects";
import { createTodo } from "./todos";

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
    projectButton.value = projectName;
    projectButton.textContent = projectName;
    projectButton.classList.add("project-button");
  }

  displayProjectInformation();
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

    addProjectsToForm();

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
  const projectNameList = document.querySelector("#project-name-list");
  projectNameList.innerHTML = "";
  Object.keys(projects)
    .reverse()
    .forEach((projectName) => {
      const option = projectNameList.appendChild(
        document.createElement("option")
      );
      option.value = projectName;
      option.textContent = projectName;
    });
}

function promptUserForNewTask() {
  const addTaskButton = document.querySelector(".add-task-button");
  const taskDetailsForm = document.querySelector(".task-details-form");
  addTaskButton.addEventListener("click", () => {
    taskDetailsForm.showModal();
  });
}

function addNewTaskToProject() {
  const taskDetailsSubmitButton = document.querySelector(
    ".submit-task-details-button"
  );
  taskDetailsSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.querySelector("#task-title");
    const description = document.querySelector("#task-description");
    const dueDate = document.querySelector("#task-due-date");
    const selectedPriority = document.querySelector(
      'input[name="taskPriority"]:checked'
    );
    const selectedProject = document.querySelector("#project-name-list");
    createTodo(
      title.value,
      description.value,
      dueDate.value,
      selectedPriority.value,
      selectedProject.value
    );

    // reset the form to prepare for next input
    title.value = "";
    description.value = "";
    dueDate.value = new Date();
    selectedPriority.checked = false;

    document.querySelector(".task-details-form").close();
    const selectedProjectInSidebar = document.querySelector(
      `.project-button[value="${selectedProject.value}"]`
    );
    console.log(selectedProjectInSidebar);
    selectedProjectInSidebar.click();
  });
}

function restartFormOnExit() {
  const taskDetailsForm = document.querySelector(".task-details-form");
  taskDetailsForm.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      document.querySelector("#task-title").value = "";
      document.querySelector("#task-description").value = "";
      document.querySelector("#task-due-date").value = new Date();
      const selectedPriority = document.querySelector(
        'input[name="taskPriority"]:checked'
      );
      if (selectedPriority !== null) {
        document.querySelector(
          'input[name="taskPriority"]:checked'
        ).checked = false;
      }
      taskDetailsForm.close();
    }
  });
}

// TODO: Remove the new project prompt when it loses focus (by, for example, user clicking somewhere else)

export {
  addProfilePictureToSidebar,
  addNewProjectWithAddButton,
  displayAllProjects,
  addNewProjectToSidebar,
  promptUserForNewTask,
  addProjectsToForm,
  addNewTaskToProject,
  restartFormOnExit,
};
