function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  (function () {
    var btn = document.getElementsByClassName("feedback-body__submit")[0];
    btn.onclick = function(e) {
        e.preventDefault()
    }
 })()