function displayProjectInformation() {
  const contentContainer = document.querySelector(".content");
  const projectButtons = document.querySelectorAll(".project-button");
  projectButtons.forEach((projectButton) => {
    projectButton.addEventListener("click", () => {
      contentContainer.innerHTML = "";

      contentContainer.innerHTML = `
      <div class="project-title-and-add">
          <h2>Project Name</h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>plus</title>
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </button>
        </div>`;

      const spaceForProjectName = document.querySelector(
        ".project-title-and-add > h2"
      );
      spaceForProjectName.textContent = projectButton.textContent;
    });
  });
}

export { displayProjectInformation };
