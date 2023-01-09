/**
 * I have created a custom class called '.display-none'
 * this class is toggled when the user clicks on the Hamburger Menu
 */

const hamburgerMenu = document.querySelector('.fa-bars')
const navigationLinks = document.querySelector('.navigation-links')

if (window.innerWidth < 575) {
    navigationLinks.classList.add('display-none')
} else {
    navigationLinks.classList.remove('display-none')
}

hamburgerMenu.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    console.log('hello')
})

/**
 * Initially, every time the webpage loaded, the dropdown menu was
 * automatically showing. I have manually added the '.display-none'
 * class. This function then removes the '.display-none' class when the
 * user clicks on the drop down.
 *
 * In order for it to close, I negated the contains method, it will no
 * longer contain the '.display-none' class. As this is true, a second
 * event listener is added, that toggles the class back and forth.
 */

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
