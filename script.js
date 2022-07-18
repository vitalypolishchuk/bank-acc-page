/*
//////////////////////////
DOC VARIABLES
//////////////////////////
*/
const navBtn = document.getElementById("navBtn");
const navLinks = document.getElementById("nav-links");
/// navigation ///

/*
//////////////////////////
NAVIGATION
//////////////////////////
*/
navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("nav-links--visible");
});
