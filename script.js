const menubutton = document.getElementsByClassName('menu-button')[0]
const searchbar = document.getElementsByClassName('search-bar')[0]
const textbar = document.getElementsByClassName('text-bar')[0]
const fillup = document.getElementsByClassName('fill-up')[0]

menubutton.addEventListener('click', () => {
    searchbar.classList.toggle('active')
    textbar.classList.toggle('active')
    fillup.classList.toggle('active')
})
