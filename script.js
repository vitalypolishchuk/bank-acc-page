"use strict";

/*
//////////////////////////
DOC VARIABLES
//////////////////////////
*/
/// variables///
const root = document.querySelector(":root");
/// body ///
const body = document.querySelector("body");
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
const lazyImages = document.querySelectorAll(".lazy-img");
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
/// testimonials  ///
const testimonialsSection = document.getElementById("testimonials");
/// modal  ///
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn--close-modal");
/// overlay  ///
const overlay = document.querySelector(".overlay");
/// msg  ///
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
function stickyNav(entries) {
  if (!entries[0].isIntersecting) navBar.classList.add("sticky");
  else navBar.classList.remove("sticky");
}
const navHeight = navBar.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, { root: null, threshold: 0, rootMargin: `-${navHeight}px` });
headerObserver.observe(headerSection);
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
/// section slide effect ///
const allSections = document.querySelectorAll("section");
const sectionObsFunc = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionObsFunc, { root: null, threshold: 0.15 });
allSections.forEach(function (section, i) {
  if (i === 0) return;
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});
/// lazy images ///
const obsImgFunc = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("lazy-img");
  entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
  imgObserver.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(obsImgFunc, { root: null, threshold: 1 });
[...lazyImages].forEach(function (img) {
  imgObserver.observe(img);
});
/// msg ///
msgBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
