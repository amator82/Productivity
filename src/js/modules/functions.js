export function isWebp() {
    function testWebP(callback) {
        let webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        }
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
    }

    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
    })
}

window.onload = function () {
    document.body.classList.add('loaded__hiding')
    window.setTimeout(function () {
        document.body.classList.add('loaded')
        document.body.classList.remove('loaded__hiding')
    }, 500)
}

//!<Menu Burger>
export function menuInit() {
    const iconMenu = document.querySelector('.menu__icon')
    const menuBody = document.querySelector('.menu__body')
    if (iconMenu) {
        iconMenu.addEventListener('click', function (e) {
            document.body.classList.toggle('_lock')
            iconMenu.classList.toggle('_active')
            menuBody.classList.toggle('_active')
        })
    }
}
//!</Menu Burger>

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})
