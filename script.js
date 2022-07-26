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
const lazyImages = document.querySelectorAll("img[data-src]");
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
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const commentsOutsContainer = document.querySelector(".outside-comments-container");
const dotContainer = document.querySelector(".dots");
const comments = document.querySelectorAll(".comment");
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
/// header ///
headerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  scrollIntoSection(e.target.getAttribute("href"));
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
  entries.forEach(function (entry) {
    if (!entry.isIntersecting || !entry.target.hasAttribute("data-src")) return;
    entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
    entry.target.removeAttribute("data-src");
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
      imgObserver.unobserve(entry.target);
    });
  });
};
const imgObserver = new IntersectionObserver(obsImgFunc, { root: null, threshold: [0, 1], rootMargin: "200px" });
[...lazyImages].forEach((img) => imgObserver.observe(img));
/// comments slider ///
let maxSlide = comments.length - 1;
let currSlide = 0;

const createDots = function () {
  comments.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML("beforeend", `<button class="dots_dot" data-comment="${i}"></button>`);
  });
};
createDots();
function dotsColor(dotNum) {
  const allDots = document.querySelectorAll(".dots_dot");
  allDots.forEach((dot, i) => {
    if (i !== dotNum) {
      dot.style.background = "#b9b9b9";
    } else {
      dot.style.background = "grey";
    }
  });
}
function nextSlide(right, left) {
  if (right) {
    currSlide = currSlide === maxSlide ? 0 : currSlide + 1;
    comments.forEach((comment, i) => (comment.style.left = 200 * (i - currSlide) + "%"));
  } else {
    currSlide = currSlide === 0 ? maxSlide : currSlide - 1;
    comments.forEach((comment, i) => (comment.style.left = 200 * (i - currSlide) + "%"));
  }
  dotsColor(currSlide);
}
function goToSlide(slide) {
  comments.forEach((comment, i) => {
    comment.style.left = 200 * (i - slide) + "%";
  });
  console.log(slide);
  currSlide = slide;
  dotsColor(currSlide);
}
goToSlide(0);
const slideInterval = setInterval(nextSlide, 10000, true, "");

dotContainer.addEventListener("click", function (e) {
  e.preventDefault();
  goToSlide(Number(e.target.getAttribute("data-comment")));
});
arrowRight.addEventListener("click", function () {
  nextSlide(true, "");
});
arrowLeft.addEventListener("click", function () {
  nextSlide("", true);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide(true, "");
  }
  if (e.key === "ArrowLeft") {
    nextSlide("", true);
  }
});
/// msg ///
msgBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
