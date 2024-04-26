function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

(function () {
  var btn = document.getElementsByClassName("feedback-body__submit")[0];
  btn.onclick = function (e) {
    e.preventDefault();
  };
})();

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptCookiesBtn = document.getElementById("accept-cookies-btn");
  const refuseCookiesBtn = document.getElementById("refuse-cookies-btn");

  acceptCookiesBtn.addEventListener("click", function () {
    cookiePopup.style.display = "none";

    document.cookie =
      "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  });

  refuseCookiesBtn.addEventListener("click", function () {
    // Cacher le pop-up de cookies
    cookiePopup.style.display = "none";
  });

  if (!getCookie("cookies_accepted")) {
    // Afficher le pop-up de cookies si l'utilisateur n'a pas encore accepté les cookies
    cookiePopup.style.display = "block";
  }

  // Fonction pour récupérer la valeur d'un cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});
