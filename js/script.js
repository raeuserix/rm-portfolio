const backup = document.querySelector(".backup");

window.addEventListener("scroll", () => {
 if (window.scrollY > 200) {
  backup.style.opacity = "1";
 } else {
  backup.style.opacity = "0";
 }
})

backup.addEventListener('click', () => {
 window.scrollTo(0, 0)
})

