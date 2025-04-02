document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
  const navmenu = document.querySelector(".navbar");
  const navlinks = document.querySelectorAll(".navbar a");
  navlinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    });
  });
});
