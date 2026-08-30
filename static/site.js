(function () {
  "use strict";

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-site-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-dropdown]").forEach(function (item) {
    var button = item.querySelector("[data-dropdown-button]");
    if (!button) {
      return;
    }
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var alreadyOpen = item.classList.contains("is-open");
      document.querySelectorAll("[data-dropdown].is-open").forEach(function (openItem) {
        openItem.classList.remove("is-open");
        var openButton = openItem.querySelector("[data-dropdown-button]");
        if (openButton) {
          openButton.setAttribute("aria-expanded", "false");
        }
      });
      if (!alreadyOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest("[data-dropdown]") || event.target.closest("[data-nav-toggle]")) {
      return;
    }
    document.querySelectorAll("[data-dropdown].is-open").forEach(function (openItem) {
      openItem.classList.remove("is-open");
      var openButton = openItem.querySelector("[data-dropdown-button]");
      if (openButton) {
        openButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
      return;
    }
    document.querySelectorAll("[data-dropdown].is-open").forEach(function (openItem) {
      openItem.classList.remove("is-open");
    });
    if (nav) {
      nav.classList.remove("is-open");
    }
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
