const imageContainer = document.querySelector(".imageContainer");
const loaderContainer = document.getElementById("loaderContainer");
const blueThemeButton = document.getElementById("blueTheme");
const yellowThemeButton = document.getElementById("yellowTheme");
const pinkThemeButton = document.getElementById("pinkTheme");
const umbrellaImage = document.getElementById("umbrellaImage");
const logoUploadButton = document.getElementById("logoUploadButton");
const logoUploadInput = document.createElement("input");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";

function showLoader() {
  loaderContainer.style.opacity = "1";
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const uploadedLogo = document.getElementById("uploadedLogo");
    uploadedLogo.src = reader.result;
    uploadedLogo.style.display = "block";
    umbrellaImage.style.zIndex = "-1";
    // umbrellaImage.style.backgroundImage = `url('${reader.result}')`;
  };
}
logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

blueThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#C5E0DC";
    logoUploadButton.style.backgroundColor = "#0000FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Blue umbrella.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2500);
  });
});

yellowThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F7E09E";
    logoUploadButton.style.backgroundColor = "#FFA500";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Yellow umbrella.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});

pinkThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F4C4C4";
    logoUploadButton.style.backgroundColor = "#FF00FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Pink umbrella.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});