const mainNav = document.querySelector('.main-nav')
const burger = document.querySelector('.burger-btn')

burger.addEventListener('click', (e) => {
   mainNav.classList.toggle('active')
})