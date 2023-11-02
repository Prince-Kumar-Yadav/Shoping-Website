const hamburgerIconEl = document.querySelector(".hamburger-icon");
const navBarEl = document.getElementById("mobile-navigation");
hamburgerIconEl.addEventListener("click", () => {
    navBarEl.classList.toggle("mobile-nav")
});