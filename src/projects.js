const projects = { Personal: [] };

function getProjects() {
  return projects;
}

function addNewProject(newProjectName) {
  projects[newProjectName] = [];
}

function deleteProject(projectName) {
  delete projects[projectName];
}

function changeProjectName(oldProjectName, newProjectName) {
  projects[newProjectName] = projects[oldProjectName];
  delete projects[oldProjectName];
}

function moveCompletedTasksToEnd(projectName) {
  const tasksInProject = projects[projectName];
  for (let i = tasksInProject.length - 1; i >= 0; i--) {
    if (tasksInProject[i].isCompleted) {
      const completedTask = tasksInProject.splice(i, 1)[0];
      tasksInProject.push(completedTask);
    }
  }
}

export {
  getProjects,
  addNewProject,
  deleteProject,
  changeProjectName,
  moveCompletedTasksToEnd,
};
