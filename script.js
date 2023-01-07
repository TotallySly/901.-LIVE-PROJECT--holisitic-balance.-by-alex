const hamburgerMenu = document.querySelector('.fa-bars')
const navigationLinks = document.querySelector('.navigation-links')

hamburgerMenu.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
})

const chevronMenu = document.querySelector('.fa-chevron-down')
const smallMenu = document.querySelector('.smaller-menu-items')

chevronMenu.addEventListener('click', () => {
    smallMenu.classList.toggle('display-none')
})
