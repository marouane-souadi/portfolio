
// const sectionNames = ["home", "about", "projects", "skills"];
// const navBtns = {}
// const sectionEls = {}

// for (let i = 0; i < sectionNames.length; i++) {
//   navBtns[sectionNames[i]] = document.getElementById(sectionNames[i]+"-btn")
//   sectionEls[sectionNames[i]] = document.getElementById(sectionNames[i]+"-section")
// }

// let currentIndex = sectionNames.indexOf("home")
// navBtns[sectionNames[currentIndex]].classList.toggle("selected");

// for (let j = 0; j< sectionNames.length; j++) {
//   navBtns[sectionNames[j]].addEventListener("click", ()=>{
//     if (j !== currentIndex) {
//       // debugger;
//       sectionEls[sectionNames[currentIndex]].classList.toggle("hidden");
//       sectionEls[sectionNames[j]].classList.toggle("hidden");
//       navBtns[sectionNames[currentIndex]].classList.toggle("selected");
//       navBtns[sectionNames[j]].classList.toggle("selected");
//       currentIndex = j;
//     }
//   })
// }

var height = document.getElementById("header").offsetHeight;
document.getElementById("home-section").style.paddingTop = height + 'px';
console.log(height)