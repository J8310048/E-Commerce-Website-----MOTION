// NAV MENU CODE START
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const links = document.querySelector(".links");

// below toggles the class of the navlinks from hidden to show, so when the user clicks the hamburger menu, they will toggle the secondary class of navlinks 
hamburgerMenu.addEventListener("click", () => {
    links.classList.toggle("show");
});

// NAV MENU CODE END