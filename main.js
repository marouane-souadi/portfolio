var header = document.getElementById("header");
var height = header.offsetHeight;
document.getElementById("welcome-section").style.paddingTop = height + 'px';
let shadow = false
window.addEventListener("scroll", function(event){
  if (event.pageY === 0) {
    header.classList.remove("shadow");
    shadow = false
  } else if (!shadow) {
    header.classList.add("shadow");
  }
});
