// open navigation menu
const mobileNav = document.querySelector('.mobile-nav')
function closeMenu() {
    mobileNav.classList.toggle('active')
}
const closeBtn = document.querySelector('.close-btn').addEventListener('click', function() {
    console.log('clicked!')
    
})

// close navigation menu
function openMenu() {
    mobileNav.classList.toggle('active')
}
const openBtn = document.querySelector('.open-btn').addEventListener('click', function() {
    console.log('clicked')
})