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
    // remove the prompt if it is already present
    const horizontalLineToDelete = document.querySelector("hr");
    if (horizontalLineToDelete !== null) {
      horizontalLineToDelete.remove();
    }
    const newProjectPromptToDelete = document.querySelector(
      ".new-project-prompt"
    );
    if (newProjectPromptToDelete !== null) {
      newProjectPromptToDelete.remove();
    }

    const projectList = document.querySelector(".project-list");
    projectList.insertBefore(
      document.createElement("hr"),
      projectList.firstChild
    );
    const newProjectPrompt = document.createElement("li");
    projectList.insertBefore(newProjectPrompt, projectList.firstChild);
    newProjectPrompt.className = "new-project-prompt";
    newProjectPrompt.textContent = "Create new project...";
  });

  // TODO: CLICKING BUTTON MULTIPLE TIMES SHOULD NOT CREATE MULTIPLE PROMPTS
}
export { addProfilePictureToSidebar, addNewProjectWithAddButton };
