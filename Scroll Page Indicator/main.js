let navbar = document.querySelector(".header");
let contentScrollBarEl = document.querySelector(".progress-bar");

document.addEventListener("scroll", () => {
  let scrollPosition = window.pageYOffset;
  navbar.classList.toggle("scrolled", scrollPosition > 56);
  let height = document.body.scrollHeight - window.innerHeight;
  let width = (scrollPosition / height) * 100;
  contentScrollBarEl.style.width = `${width}%`;
});
