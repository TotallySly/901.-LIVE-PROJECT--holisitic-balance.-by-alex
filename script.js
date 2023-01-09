const hamburgerMenu = document.querySelector('.fa-bars')
const navigationLinks = document.querySelector('.navigation-links')

hamburgerMenu.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
})

const chevronMenu = document.querySelector('.fa-chevron-down')
const dropDownMenu = document.querySelector('.smaller-menu-items')

chevronMenu.addEventListener('click', () => {
    dropDownMenu.classList.remove('display-none')

    if (!dropDownMenu.classList.contains('display-none')) {
        chevronMenu.addEventListener('click', () => {
            dropDownMenu.classList.toggle('display-none')
        })
    }
})
