import pfp from "./images/cat-pfp.png";

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
    const projectList = document.querySelector(".project-list");
    projectList.insertBefore(
      document.createElement("hr"),
      projectList.firstChild
    );
    const newProjectNamePrompt = document.createElement("li");
    projectList.insertBefore(newProjectNamePrompt, projectList.firstChild);
    newProjectNamePrompt.className = "new-project-prompt";
    newProjectNamePrompt.textContent = "Create new project...";
  });
}
export { addProfilePictureToSidebar, addNewProjectWithAddButton };
