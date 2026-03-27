const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");
const nextBtn = document.getElementById("nextBtn");

let current = 0;
const total = panels.length;

function goToSlide(index) {
  if (index >= total) return;

  current = index;
  container.style.transform = `translateX(-${index * 100}vw)`;
}

nextBtn.addEventListener("click", () => {
  goToSlide(current + 1);
});


window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    goToSlide(current + 1);
  } else {
    goToSlide(current - 1);
  }
});