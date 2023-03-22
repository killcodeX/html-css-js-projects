let navbar = document.querySelector('.header');

document.addEventListener("scroll",() =>{
    let scrollPosition = window.pageYOffset;

    navbar.classList.toggle('scrolled',scrollPosition > 56)

    console.log(scrollPosition)
})