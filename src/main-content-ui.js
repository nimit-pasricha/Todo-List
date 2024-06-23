import { getProjects } from "./projects";
import { clickProjectInSidebar } from "./sidebar-ui";

function displayProjectInformation() {
  const defaultProjectName = "Personal";

  // display person task list by default.
  const defaultProject = document.querySelector(
    `.project-button[value="${defaultProjectName}"]`
  );
  clickProjectInSidebar(defaultProject);

  const contentContainer = document.querySelector(".content");
  const projectButtons = document.querySelectorAll(".project-button");
  projectButtons.forEach((projectButton) => {
    projectButton.addEventListener("click", () => {
      contentContainer.innerHTML = `
      <div class="project-title-and-add">
          <h2></h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>plus</title>
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </button>
        </div>
        <div class="task-list"></div>
        `;

      const spaceForProjectName = document.querySelector(
        ".project-title-and-add > h2"
      );
      spaceForProjectName.textContent = projectButton.textContent;

      displayTasksInProject(projectButton.textContent);
    });
  });
}

function displayTasksInProject(projectName) {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  const projects = getProjects();
  const thisProjectsTasks = projects[projectName];
  let index = 0;

  if (thisProjectsTasks.length === 0) {
    taskList.innerHTML = "<div>This project has no more tasks :)</div>";
  } else {
    thisProjectsTasks.forEach((task) => {
      taskList.innerHTML += `
        <div class="task" data-index="${index}">
          <h3></h3>
          <div class="task-controls">
            <button class="expand-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="expand-icon"
              >
                <title>arrow-expand</title>
                <path
                  d="M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"
                />
              </svg>
            </button>
            <button class="edit-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="expand-icon"
              >
                <title>pencil</title>
                <path
                  d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                />
              </svg>
            </button>
            <button class="delete-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="delete-icon"
              >
                <title>delete</title>
                <path
                  d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                />
              </svg>
            </button>
          </div>
          <div class="task-due-date"></div>
      </div>`;

      const taskTitle = document.querySelector(
        `.task[data-index="${index}"] h3`
      );
      taskTitle.textContent = task.title;

      const taskDueDate = document.querySelector(
        `.task[data-index="${index}"] .task-due-date`
      );
      taskDueDate.textContent = task.dueDate;
      index++;
    });
  }
}

export { displayProjectInformation };
