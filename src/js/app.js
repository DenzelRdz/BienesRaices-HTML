document.addEventListener("DOMContentLoaded", function () {
  eventListeners();

  darkMode();
});

function darkMode() {
  const preferenceDark = window.matchMedia("(prefers-color-scheme: dark)");

  if (preferenceDark.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  preferenceDark.addEventListener("change", function () {
    if (preferenceDark.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  const botonDarkMode = document.querySelector(".dark-mode-boton");
  botonDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode"); // toggle agrega o quita la clase
  });
}

function eventListeners() {
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu.addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  const navegacion = document.querySelector(".navegacion");
  if (navegacion.classList.contains("mostrar")) {
    navegacion.classList.remove("mostrar");
  } else {
    navegacion.classList.add("mostrar");
  }
  // Se puede usar toggle
}
