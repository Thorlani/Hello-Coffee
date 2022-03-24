function imageSlider(anything) {
    document.querySelector('.slider').src = anything;
}

const navbar = document.getElementsByClassName('navbar')[0]
const menu =document.getElementsByClassName('menu-icon')[0]

menu.addEventListener('click', ()=> {
    menu.classList.toggle('menu-icon-active')
    navbar.classList.toggle('navbar-active')
})