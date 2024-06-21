const projects = {};

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

export { getProjects, addNewProject, deleteProject, changeProjectName };
