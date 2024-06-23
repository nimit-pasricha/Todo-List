import { getProjects } from "./projects";
import { clickProjectInSidebar } from "./sidebar-ui";
import { format } from "date-fns";

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
  moveCompletedTasksToEnd(projectName);

  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  const projects = getProjects();
  console.log(projects);
  const thisProjectsTasks = projects[projectName];
  let index = 0;

  if (thisProjectsTasks.length === 0) {
    taskList.innerHTML = "<div>This project has no tasks :)</div>";
  } else {
    thisProjectsTasks.forEach((task) => {
      taskList.innerHTML += `
        <div class="task" data-index="${index}">
          <h3></h3>
          <div class="task-controls">
            <button class="check-button" data-index="${index}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>
            </button>
            <button class="edit-button" data-index="${index}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="check-icon"
              >
                <title>pencil</title>
                <path
                  d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                />
              </svg>
            </button>
            <button class="delete-button" data-index="${index}">
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
      taskDueDate.textContent = format(task.dueDate, "PPPP");

      if (task.isCompleted) {
        const completedTask = document.querySelector(
          `.task[data-index="${index}"]`
        );
        completedTask.classList.add("completed");
      }
      index++;
    });

    completeTask();
    deleteTask();
  }
}

function moveCompletedTasksToEnd(projectName) {
  const projects = getProjects();
  const tasksInProject = projects[projectName];
  for (let i = tasksInProject.length - 1; i >= 0; i--) {
    if (tasksInProject[i].isCompleted) {
      const completedTask = tasksInProject.splice(i, 1)[0];
      tasksInProject.push(completedTask);
    }
  }
}

function deleteTask() {
  const projects = getProjects();
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const taskToDeleteIndex = deleteButton.dataset.index;
      const projectToDeleteFrom = document.querySelector(
        ".project-title-and-add > h2"
      ).textContent;
      projects[projectToDeleteFrom].splice(taskToDeleteIndex, 1);
      displayTasksInProject(projectToDeleteFrom);
    });
  });
}

function completeTask() {
  const projects = getProjects();
  const checkButtons = document.querySelectorAll(".check-button");
  checkButtons.forEach((checkButton) => {
    checkButton.addEventListener("click", () => {
      const taskToCompleteIndex = checkButton.dataset.index;
      const projectToEdit = document.querySelector(
        ".project-title-and-add > h2"
      ).textContent;
      const taskToComplete = projects[projectToEdit][taskToCompleteIndex];
      taskToComplete.isCompleted = !taskToComplete.isCompleted;
      displayTasksInProject(projectToEdit);
    });
  });
}

export { displayProjectInformation };
