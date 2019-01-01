var header = document.getElementById("header");
var height = header.offsetHeight;
document.getElementById("home-section").style.paddingTop = height + 'px';
window.addEventListener("scroll", function(event){
  if (event.pageY === 0) {
    header.classList.remove("shadow");
  } else {
    header.classList.add("shadow");
  }
});