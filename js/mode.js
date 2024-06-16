const modeBtn = document.getElementById("mode-btn");
const navBar = document.querySelector("nav");
const navBrand = document.getElementById("nav-a");
const githubLogo = document.getElementById("github-logo");
const projectLinks = document.querySelectorAll(".project-link");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")) {
    document.body.classList.toggle("dark-mode");
    navBar.classList.toggle("nav-dark-mode");
    navBrand.classList.toggle("brand-dark-mode");
    modeBtn.src = "assets/dark_mode.svg";
    githubLogo.src = "assets/github_dark.svg";
    projectLinks.forEach((link) => {
        console.log(link);
    });
}

modeBtn.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    navBar.classList.toggle("nav-dark-mode");
    navBrand.classList.toggle("brand-dark-mode");
    modeBtn.src = isDarkMode ? "assets/dark_mode.svg" : "assets/light_mode.svg";
    githubLogo.src = isDarkMode ? "assets/github_dark.svg" : "assets/github.svg";
    projectLinks.forEach((link) => {
        link.style.color = isDarkMode ? "white" : "black";
    });
});
