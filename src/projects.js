const projects = {};

function getProjects() {
  return projects;
}

function addNewProject() {
  const newProjectName = prompt("Enter name of project: ");
  projects[newProjectName] = [];
}

function deleteProject() {
  const projectToDelete = prompt("Enter project name to delete");
  delete projects[projectToDelete];
}

export { getProjects, addNewProject, deleteProject };