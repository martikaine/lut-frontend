window.addEventListener("DOMContentLoaded", () => {
  addNavLinkClickHandlers();
  addScrollPositionHandler();
  addTitleFadeOutEffect();
});

function addNavLinkClickHandlers() {
  const navLinks = document.querySelectorAll(".navlink");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      const isResponsiveMenuVisible =
        document.querySelector(".menu-toggle").style.display !== "none";
      if (isResponsiveMenuVisible) {
        toggleMenu();
      }
    });
  });
}

function addScrollPositionHandler() {
  const navLinks = document.querySelectorAll(".navlink");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      const targetPosition = target.offsetTop;
      const targetHeight = target.offsetHeight;

      if (
        targetPosition <= scrollPosition &&
        targetPosition + targetHeight > scrollPosition
      ) {
        const activeLink = document.querySelector("#navbar a.active");

        if (activeLink) {
          activeLink.classList.remove("active");
        }
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}

function addTitleFadeOutEffect() {
  window.addEventListener("scroll", function () {
    let fade = document.querySelector(".title-container");
    let bounding = fade.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      fade.style.opacity = "1"; // Fully visible
    } else if (bounding.top < 0) {
      fade.style.opacity = 1 + (bounding.top - 750) / window.innerHeight; // Fading out up
    }
  });
}

function toggleMenu() {
  var navbar = document.querySelector("#navbar");
  if (navbar.classList.contains("responsive-open")) {
    navbar.classList.remove("responsive-open");
  } else {
    navbar.classList.add("responsive-open");
  }
}
