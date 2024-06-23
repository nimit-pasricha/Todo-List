import { getProjects, moveCompletedTasksToEnd } from "./projects";
import { clickProjectInSidebar, displayAllProjects } from "./sidebar-ui";
import { format } from "date-fns";
import { changeCompletedStatus, deleteTodo } from "./todos";

function displayProjectInformation() {
  const defaultProjectName = "Personal";

  // display personal task list by default.
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
      spaceForProjectName.value = projectButton.textContent;

      displayTasksInProject(projectButton.textContent);
    });
  });
}

function displayTasksInProject(projectName) {
  moveCompletedTasksToEnd(projectName);

  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";

  const projects = getProjects();
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
                class="edit-icon"
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
    editTask();
    deleteTask();
  }
}

function deleteTask() {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const taskToDeleteIndex = deleteButton.dataset.index;
      const projectToDeleteFrom = document.querySelector(
        ".project-title-and-add > h2"
      ).textContent;
      deleteTodo(projectToDeleteFrom, taskToDeleteIndex);
      displayTasksInProject(projectToDeleteFrom);
    });
  });
}

function completeTask() {
  const checkButtons = document.querySelectorAll(".check-button");
  checkButtons.forEach((checkButton) => {
    checkButton.addEventListener("click", () => {
      const taskToCompleteIndex = checkButton.dataset.index;
      const projectToEdit = document.querySelector(
        ".project-title-and-add > h2"
      ).textContent;
      changeCompletedStatus(projectToEdit, taskToCompleteIndex);
      displayTasksInProject(projectToEdit);
    });
  });
}

function editTask() {
  const projects = getProjects();
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", () => {
      const taskToEditIndex = editButton.dataset.index;
      const projectToEdit = document.querySelector(
        ".project-title-and-add > h2"
      ).textContent;

      // Open edit window with currently selected values
      // already present in the input fields
      const addTaskButton = document.querySelector(".add-task-button");
      addTaskButton.click();

      const taskToEdit = projects[projectToEdit][taskToEditIndex];
      const taskTitleInput = document.querySelector("#task-title");
      taskTitleInput.value = taskToEdit.title;

      const taskDescriptionInput = document.querySelector("#task-description");
      taskDescriptionInput.value = taskToEdit.description;

      const taskDueDateInput = document.querySelector("#task-due-date");
      taskDueDateInput.value = taskToEdit.dueDate;

      const taskPriorityInput = document.querySelector(
        `input[name="taskPriority"][value=${taskToEdit.priority}]`
      );
      taskPriorityInput.checked = true;

      const projectNameInput = document.querySelector(
        `option[value="${projectToEdit}"]`
      );
      projectNameInput.selected = "selected";

      // Change the Add Task submit button to edit the task
      // instead of creating a new one

      const submitTaskDetailsButton = document.querySelector(
        ".submit-task-details-button"
      );
      submitTaskDetailsButton.addEventListener(
        "click",
        () => {
          const newlySelectedProject =
            document.querySelector("#project-name-list").value;
          const projectToDisplay = document.querySelector(
            `.project-button[value="${newlySelectedProject}"]`
          );
          deleteTodo(projectToEdit, taskToEditIndex);
          clickProjectInSidebar(projectToDisplay);
        },
        { once: true }
      );
    });
  });
}

export { displayProjectInformation };
