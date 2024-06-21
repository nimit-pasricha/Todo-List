import pfp from "./images/cat-pfp.png";

function addProfilePictureToSidebar() {
  const profilePicture = new Image();
  profilePicture.src = pfp;
  profilePicture.alt = "image of very round cat holding a yarn ball";
  profilePicture.className = "cat-pfp";

  const userInfo = document.querySelector(".user-info");
  userInfo.insertBefore(profilePicture, userInfo.firstChild);
}

export { addProfilePictureToSidebar };