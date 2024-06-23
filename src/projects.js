let projects;
function getProjects() {
  if (!localStorage.getItem("projects")) {
    projects = { Personal: [] };
    localStorage.setItem("projects", JSON.stringify(projects));
  } else {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  return projects;
}

function addNewProject(newProjectName) {
  projects[newProjectName] = [];
  localStorage.setItem("projects", JSON.stringify(projects));
}

function deleteProject(projectName) {
  delete projects[projectName];
  localStorage.setItem("projects", JSON.stringify(projects));
}

function changeProjectName(oldProjectName, newProjectName) {
  projects[newProjectName] = projects[oldProjectName];
  delete projects[oldProjectName];
  localStorage.setItem("projects", JSON.stringify(projects));
}

function moveCompletedTasksToEnd(projectName) {
  const tasksInProject = projects[projectName];
  for (let i = tasksInProject.length - 1; i >= 0; i--) {
    if (tasksInProject[i].isCompleted) {
      const completedTask = tasksInProject.splice(i, 1)[0];
      tasksInProject.push(completedTask);
    }
  }
  localStorage.setItem("projects", JSON.stringify(projects));
}

function orderTasksInPriority(projectName) {
  const tasksInProject = projects[projectName];
  tasksInProject.sort(compare);
}

function compare(a, b) {
  switch (a.priority) {
    case "Low":
      return 1;
    case "High":
      return -1;
    case "Medium":
      if (b.priority === "High") {
        return 1;
      } else if (b.priority === "Low") {
        return -1;
      }
      break;
  }
}

export {
  getProjects,
  addNewProject,
  deleteProject,
  changeProjectName,
  moveCompletedTasksToEnd,
  orderTasksInPriority,
};
