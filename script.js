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
const headerSection = document.querySelector(".header");
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
function handleHover(e) {
  console.log(this);
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = navLinkEach;
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
}
navLinks.addEventListener("mouseover", handleHover.bind(0.5));
navLinks.addEventListener("mouseout", handleHover.bind(1));
// sticky nav using Intersection Observer API
// const featuresCords = featuresSection.getBoundingClientRect();
// window.addEventListener("scroll", function (e) {
//   if (window.scrollY > featuresCords.top) {
//     navBar.style.position = "sticky";
//     navBar.style.background = "rgba(255,255,255,0.7)";
//   } else {
//     navBar.style.background = getComputedStyle(root).getPropertyValue("--color-background");
//     navBar.style.position = "absolute";
//   }
// });
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    console.log("here");
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: -0 });
headerObserver.observe(headerSection);
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
    const dataTab = +e.target.getAttribute("data-tab");
    [...this.children].forEach((child, i) => {
      if (dataTab === i) {
        child.style.marginBottom = "1rem";
        operationsInsideContainer[dataTab].classList.remove("hidden");
      } else {
        child.style.marginBottom = "0rem";
        operationsInsideContainer[i].classList.add("hidden");
      }
    });
  }
});
/// msg ///
msgBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// // practice
// const obsCallBack = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// }; // will get called each time when observed element intersects the root element at the threshold

// const obsOptions = {
//   root: null, // element that the target is intesecting
//   threshold: 0.1,
// };
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(featuresSection);
