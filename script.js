const profileDetails = document.querySelector(".profile--details");
const forMobile = document.querySelector(".mobile");
const forDesktop = document.querySelector(".desktop");

const shareBtnMain = document.querySelector(".share--button");
const shareBtnOver = document.getElementById("share--btn__over");
let mobileScreen = window.matchMedia("(max-width: 800px)");
let desktopScreen = window.matchMedia("(min-width: 800px)");
let screenWidth = screen.width;

eventListeners();

function eventListeners() {
  shareBtnMain.addEventListener("click", showSocial);
}

function showSocial() {
  if (mobileScreen.matches) {
    profileDetails.classList.add("hidden");
    forMobile.classList.remove("hidden");

    setTimeout(() => {
      profileContainer.classList.remove("hidden");
      forMobile.classList.add("hidden");
    }, 5000);
  } else if (desktopScreen.matches) {
    forMobile.classList.add("hidden");
    forDesktop.classList.remove("hidden");

    setTimeout(() => {
      forDesktop.classList.add("hidden");
    }, 5000);
  }
}
