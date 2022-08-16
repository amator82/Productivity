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

export function dropDown() {
    const link = document.querySelectorAll('.menu-dropdown__link')

    link.forEach((prev) => {
        const preview = prev.querySelectorAll('.menu-dropdown__preview')
        const content = prev.querySelectorAll('.menu-dropdown__content')

        prev.addEventListener('click', (el) => {
            prev.classList.toggle('_open')

            preview.forEach((item) => {
                const arrow = item
                    .querySelector('.menu-dropdown__arrow')
                    .classList.toggle('_active')
                const title = item
                    .querySelector('.menu-dropdown__title')
                    .classList.toggle('_active')
            })
            content.forEach((e) => {
                e.classList.toggle('_active')
            })
        })
    })
}
