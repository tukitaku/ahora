const starsContainer = document.getElementById("stars-container");

for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.className = "star";
  starsContainer.appendChild(star);
}

const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  const size = Math.random() * 2;
  const animationDuration = Math.random() * 2 + 1;
  const animationDelay = Math.random() * 2;
  const left = Math.random() * 100;
  const top = Math.random() * 100;

  star.style.left = `${left}%`;
  star.style.top = `${top}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDuration = `${animationDuration}s`;
  star.style.animationDelay = `${animationDelay}s`;
});