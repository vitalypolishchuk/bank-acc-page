"use strict";

/*
//////////////////////////
DOC VARIABLES
//////////////////////////
*/
/// variables///
const root = document.querySelector(":root");
/// navigation ///
const navBar = document.querySelector(".navBar");
const navBtn = document.getElementById("navBtn");
const navLinkEach = document.querySelectorAll(".nav-link");
const navLinks = document.getElementById("nav-links");
const openAccBtn = document.querySelector(".open-acc");
const navLinkFeatures = document.querySelector(".nav-link-features");
const navLinkOperations = document.querySelector(".nav-link-operations");
const navLinkTestimonials = document.querySelector(".nav-link-testimonials");
/// header ///
const headerTitle = document.querySelector(".header-title");
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
function scrollIntoSection(section) {
  const docSection = document.querySelector(section);
  if (navLinks.classList.contains("nav-links--visible")) {
    navLinks.classList.remove("nav-links--visible");
    setTimeout(() => docSection.scrollIntoView({ behavior: "smooth" }), 400);
  } else {
    docSection.scrollIntoView({ behavior: "smooth" });
  }
}
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
// EVENT DELEGATION
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  if (e.target.classList.contains("nav-link") && id !== "#") scrollIntoSection(id);
});
let lastScrollY = window.scrollY;
const featuresCords = featuresSection.getBoundingClientRect();
window.addEventListener("scroll", function () {
  if (lastScrollY > featuresCords.top) {
    navBar.style.position = "sticky";
    navBar.style.background = "rgba(255,255,255,0.7)";
  } else {
    navBar.style.background = getComputedStyle(root).getPropertyValue("--color-background");
    navBar.style.position = "absolute";
  }
  lastScrollY = window.scrollY;
});
/// Header ///
headerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const id = this.getAttribute("href");
  scrollIntoSection(id);
});
/// operations ///
operationsBtnContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("operation-btn")) {
    const indexOfTarget = [...operationsBtnContainer.children].indexOf(e.target);
    [...this.children].forEach((child, i) => {
      if (indexOfTarget === i) {
        child.style.marginBottom = "1rem";
        operationsInsideContainer[indexOfTarget].style.opacity = 0.7;
        operationsInsideContainer[indexOfTarget].style.visibility = 1;
      } else {
        child.style.marginBottom = "0rem";
        operationsInsideContainer[i].style.opacity = 0;
        operationsInsideContainer[i].style.visibility = 0;
      }
    });
  }
});
/// msg ///
msgBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// // going downwards: child
// console.log(headerTitle.querySelectorAll(".word-background"));
// console.log(headerTitle.childNodes);
// console.log((headerTitle.firstElementChild.style.color = "white"));
// console.log(headerTitle.parentElement);
// // headerTitle.closest(".header").style.background = "white"; // to get closest certain parent

// // siblings
// console.log(headerTitle.previousElementSibling);
// console.log(headerTitle.nextSibling);
