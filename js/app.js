// responsive burger menu open
const toggler = document.querySelector(".navbar-toggler");

toggler.addEventListener("click", function (el) {
  const burger_menu = document.querySelector(".navbar-collapse");

  burger_menu.classList.toggle("show");

  if(window.innerWidth < 576) {
    document.querySelector("body").classList.toggle("scroll-off");
  }
});

// responsive burger menu Close
const togglerClose = document.querySelector(".navbar-mobile-header .close");

togglerClose.addEventListener("click", (e) => {
  const burger_menu = document.querySelector(".navbar-collapse");

  burger_menu.classList.remove("show");

  if(window.innerWidth < 576) {
    document.querySelector("body").classList.remove("scroll-off");
  }
});