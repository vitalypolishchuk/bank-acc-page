/*
//////////////////////////
DOC VARIABLES
//////////////////////////
*/
/// navigation ///
const navBtn = document.getElementById("navBtn");
const navLinks = document.getElementById("nav-links");
const openAccBtn = document.querySelector(".open-acc");
/// operations ///
const operationsBtnContainer = document.querySelector(".operations-btns-container");
const transferBtn = document.querySelector(".transfer");
const loanBtn = document.querySelector(".loan");
const closeBtn = document.querySelector(".close");
const operationsInsideContainer = document.querySelectorAll(".operations-inside-container");
const transferMoneyContainer = document.querySelector(".transfer-money-container");
const loanContainer = document.querySelector(".loan-container");
const closeContainer = document.querySelector(".close-container");
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
