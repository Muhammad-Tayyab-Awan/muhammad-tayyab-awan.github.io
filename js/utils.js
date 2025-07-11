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
// certificate share btn handling
const shareBtns = document.querySelectorAll("img[alt='share']");
const openModal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");
const palestineModal = document.querySelector(".palestine");
const closeBanner = document.querySelector(".closeBanner");
const copyUrlBtn = document.querySelector(".copy > span");
shareBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openModal.classList.add("flex");
    let shareURI = e.target.parentElement.previousElementSibling.src;
    setShareURI(shareURI);
  });
});

closeModal.addEventListener("click", () => {
  openModal.classList.remove("flex");
});

closeBanner.addEventListener("click", () => {
  palestineModal.classList.add("hidden");
});

copyUrlBtn.addEventListener("click", (e) => {
  const copyURI = e.target.parentElement.querySelector("input");
  copyURI.select();
  navigator.clipboard.writeText(copyURI.value);
});

function setShareURI(URI) {
  document.querySelector(
    "#fb_share_url"
  ).href = `https://www.facebook.com/sharer.php?u=${URI}`;
  document.querySelector(
    "#x_share_url"
  ).href = `https://x.com/intent/tweet?url=${URI}`;
  document.querySelector(
    "#lin_share_url"
  ).href = `https://www.linkedin.com/sharing/share-offsite/?url=${URI}`;
  document.querySelector(
    "#wtp_share_url"
  ).href = `whatsapp://send/?text=${URI}`;
  document.querySelector(".copy > input").value = URI;
}
