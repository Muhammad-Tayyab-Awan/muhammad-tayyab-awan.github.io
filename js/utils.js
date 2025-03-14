// Year Setting
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
// Animation Handling
const box = document.querySelector(".my-photo");
function checkScroll() {
  const rect = box.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    box.classList.add("slide-down");
  }
}
window.addEventListener("scroll", checkScroll);
checkScroll();
