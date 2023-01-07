const hamburgerMenu = document.querySelector('.fa-bars')
const navigationLinks = document.querySelector('.navigation-links')

hamburgerMenu.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
})
