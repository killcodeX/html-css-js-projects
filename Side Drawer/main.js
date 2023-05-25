let btn = document.querySelector(".btn");
let drawer = document.querySelector(".side-drawer");
let closeBtn = document.querySelector(".drawer-close");



btn.addEventListener("click", () => {
  drawer.classList.add("side-drawer-open");
});

closeBtn.addEventListener("click", () => {
    drawer.classList.remove("side-drawer-open");
  });
