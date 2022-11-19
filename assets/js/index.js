const mainNav = document.querySelector('.main-nav')
const burger = document.querySelector('.burger-btn')
const navLink = document.querySelectorAll('.nav-link')

burger.addEventListener('click', (e) => {
   mainNav.classList.toggle('active')
})

navLink.forEach(link => {
   link.addEventListener('click', (e) => {
      mainNav.classList.remove('active')
   })
})