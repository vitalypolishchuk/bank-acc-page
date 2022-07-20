/*
//////////////////////////
DOC VARIABLES
//////////////////////////
*/
/// navigation ///
const navBtn = document.getElementById("navBtn");
const navLinks = document.getElementById("nav-links");
const openAccBtn = document.querySelector(".open-acc");
const navLinkFeatures = document.querySelector(".nav-link-features");
const navLinkOperations = document.querySelector(".nav-link-operations");
const navLinkTestimonials = document.querySelector(".nav-link-testimonials");
/// header ///
const headerBtn = document.querySelector(".header-button");
/// features ///
const featuresSection = document.getElementById("features");
/// operations ///
const operationsSection = document.getElementById("operations");
const operationsBtnContainer = document.querySelector(".operations-btns-container");
const transferBtn = document.querySelector(".transfer");
const loanBtn = document.querySelector(".loan");
const closeBtn = document.querySelector(".close");
const operationsInsideContainer = document.querySelectorAll(".operations-inside-container");
const transferMoneyContainer = document.querySelector(".transfer-money-container");
const loanContainer = document.querySelector(".loan-container");
const closeContainer = document.querySelector(".close-container");
// testimonials
const testimonialsSection = document.getElementById("testimonials");
// modal
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
// overlay
const overlay = document.querySelector(".overlay");
// msg
const msgBtn = document.querySelector(".msg-btn");
/*
//////////////////////////
EVENT LISTENERS
//////////////////////////
*/
/// navigation ///
navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("nav-links--visible");
});
openAccBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
navLinkFeatures.addEventListener("click", function (e) {
  e.preventDefault();
  featuresSection.scrollIntoView({ behavior: "smooth" });
});
navLinkOperations.addEventListener("click", function (e) {
  e.preventDefault();
  operationsSection.scrollIntoView({ behavior: "smooth" });
});
navLinkTestimonials.addEventListener("click", function (e) {
  e.preventDefault();
  testimonialsSection.scrollIntoView({ behavior: "smooth" });
});
/// Header ///
headerBtn.addEventListener("click", function (e) {
  const featuresCords = featuresSection.getBoundingClientRect();
  console.log(featuresCords);

  // Scrolling
  // OLD WAY
  // window.scrollTo({
  //   left: featuresCords.left + window.pageXOffset,
  //   top: featuresCords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  featuresSection.scrollIntoView({ behavior: "smooth" });
});
/// operations ///
transferBtn.addEventListener("click", function () {
  operationsInsideContainer.forEach((selector) => {
    selector.style.display = "none";
  });
  transferBtn.style.alignSelf = "flex-start";
  loanBtn.style.alignSelf = "center";
  closeBtn.style.alignSelf = "center";
  transferMoneyContainer.style.display = "inline-block";
});
loanBtn.addEventListener("click", function () {
  operationsInsideContainer.forEach((selector) => {
    selector.style.display = "none";
  });
  transferBtn.style.alignSelf = "center";
  loanBtn.style.alignSelf = "flex-start";
  closeBtn.style.alignSelf = "center";
  loanContainer.style.display = "inline-block";
});
closeBtn.addEventListener("click", function () {
  operationsInsideContainer.forEach((selector) => {
    selector.style.display = "none";
  });
  transferBtn.style.alignSelf = "center";
  loanBtn.style.alignSelf = "center";
  closeBtn.style.alignSelf = "flex-start";
  closeContainer.style.display = "inline-block";
});
// msg
msgBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
