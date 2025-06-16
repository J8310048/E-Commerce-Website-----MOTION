// NAV MENU CODE START
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const links = document.querySelector(".links");

// below toggles the class of the navlinks from hidden to show, so when the user clicks the hamburger menu, they will toggle the secondary class of navlinks 
hamburgerMenu.addEventListener("click", () => {
    links.classList.toggle("show");
});

// NAV MENU CODE END

function validate() {
    let x = document.forms["form"]["name"].value;
    let y = document.forms["form"]["email"].value;
    let z = document.forms["form"]["message"].value;

    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
    else if (y === "") {
        alert("Email must be filled out");
        return false;
    }
    else if (z === "") {
        alert("We want to hear from you!");
        return false;
    }
    return true; // Validation passed if all fields are filled
}

