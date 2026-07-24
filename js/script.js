document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const header = document.querySelector(".site-header");

  if (!menuToggle || !navLinks) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-controls", "navLinks");

  function openMenu() {
    navLinks.classList.add("show");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.innerHTML = "✕";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = "☰";
    document.body.style.overflow = "";
  }

  function toggleMenu(event) {
    event.stopPropagation();
    const isOpen = navLinks.classList.contains("show");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  document.addEventListener("click", function (event) {
    const clickedInsideNav = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      header.style.boxShadow = "0 10px 30px rgba(62, 24, 37, 0.08)";
    } else {
      header.style.boxShadow = "none";
    }
  });
});
