    let menuLinks = document.querySelector('.navbar__menu')
    let menu = document.querySelector('#mobile-menu')

    menu.addEventListener("click", function(){
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    })
