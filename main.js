const fireworks = document.querySelector(".fireworks");

setInterval(() => {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  fireworks.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 750);
}, 1000);
