/**
 * I have created a custom class called '.display-none'
 * this class is toggled when the user clicks on the Hamburger Menu
 */

/**
 * HAMBURGER NAVIGATION
 */

const hamburgerOpen = document.querySelector('.fa-bars')
const hamburgerClose = document.querySelector('.fa-x')
const navigationLinks = document.querySelector('.navigation-links')

if (window.innerWidth < 575) {
    navigationLinks.classList.add('display-none')
} else {
    navigationLinks.classList.remove('display-none')
}

hamburgerOpen.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    hamburgerOpen.classList.add('display-none')
    hamburgerClose.classList.remove('display-none')
})

hamburgerClose.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    hamburgerOpen.classList.remove('display-none')
    hamburgerClose.classList.add('display-none')
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

/**
 * CAROUSEL
 */

const slider = document.querySelector('.slider')
const arrowLeft = document.querySelector('.left')
const arrowRight = document.querySelector('.right')

const slides = document.querySelectorAll('.slide')

let index = 0

let interval = setInterval(run, 10000)

function run() {
    index++
    changeSlides()
}

function changeSlides() {
    if (index > slides.length - 1) {
        index = 0
    } else if (index < 0) {
        index = slides.length - 1
    }

    // This is based on there being 5 items within the content section.
    // 100% divided by 4 is 25 %. This will need to be changed depending
    // on how many content slides there are.

    // .container .carousel .slider {
    //     width: 400%;
    // }
    //

    slider.style.transform = `translateX(${-index * 50}%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 10000)
}

arrowRight.addEventListener('click', () => {
    index++

    changeSlides()
    resetInterval()
})

arrowLeft.addEventListener('click', () => {
    index--

    changeSlides()
    resetInterval()
})
