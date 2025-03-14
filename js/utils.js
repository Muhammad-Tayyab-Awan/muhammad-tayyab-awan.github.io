// Year Setting
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
// Animation Handling
const box1 = document.querySelector(".my-photo");
const box2 = document.querySelector(".name");
function checkScroll() {
  const rect1 = box1.getBoundingClientRect();
  if (rect1.top < window.innerHeight * 0.8) {
    box1.classList.add("slide-down");
  }
  const rect2 = box2.getBoundingClientRect();
  if (rect2.top < window.innerHeight * 0.8) {
    box2.classList.add("slide-down");
  }
}
window.addEventListener("scroll", checkScroll);
checkScroll();
