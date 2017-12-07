const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const openNav = document.querySelector(".page-header");
  openNav.classList.toggle("nav-opened");
}, false)

/* every keydown toggles nav-menu :v */
hamburger.addEventListener("keydown", function (e) {
  //if (e.keycode == 27)
  const openNav = document.querySelector(".page-header");
  openNav.classList.toggle("nav-opened");
}, false)


/* subscribe -- modal on */
const sub = document.querySelector(".subscribe-btn");
sub.addEventListener("click", function() {
  const modalContent = document.querySelector(".modal-content");
  const background = document.querySelector("aside");

  modalContent.style.display = "block";
  background.classList.add("modal");
}, false)

/* close-btn -- modal off */
const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function() {
  const modalContent = document.querySelector(".modal-content");
  const background = document.querySelector("aside");

  modalContent.style.display = "none";
  background.classList.remove("modal");
}, false)
