/* Overlay */
function openNav() {
  document.getElementById("page-overlay").style.width = "100%";
}
function closeNav() {
  document.getElementById("page-overlay").style.width = "0%";
}
/* Overlay [END] */

/* Image Gallery | Base layout structured from W3Schools - https://www.w3schools.com/howto/howto_js_slideshow.asp */
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
}
/* Image Gallery [END] */

/* Scroll Top */
var topbutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* Scroll Top [END]*/
