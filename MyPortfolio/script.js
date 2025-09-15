AOS.init({
  duration: 1200,
  once: true,
});

window.addEventListener("load", () => {
  const left = document.querySelector(".welcome-left");
  const right = document.querySelector(".welcome-right");
  const screen = document.getElementById("welcome-screen");

  setTimeout(() => {
    left.style.opacity = 1;
    left.style.transform = "translateX(0)";
    right.style.opacity = 1;
    right.style.transform = "translateX(0)";
  }, 300);

  setTimeout(() => {
    screen.style.opacity = 0;
    setTimeout(() => {
      screen.style.display = "none";
    }, 1000);
  }, 2500);
});
