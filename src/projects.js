const projects = {};

function getProjects() {
  return projects;
}

function addNewProject(newProjectName) {
  projects[newProjectName] = [];
}

function deleteProject(projectToDelete) {
  delete projects[projectToDelete];
}

export { getProjects, addNewProject, deleteProject };