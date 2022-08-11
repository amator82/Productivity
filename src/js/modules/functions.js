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
    const dropDownPreview = document.querySelectorAll('.menu-dropdown__preview')
    const dropDownContent = document.querySelectorAll('.menu-dropdown__content')
    const dropDownArrow = document.querySelectorAll('.menu-dropdown__arrow')
    const dropDownTitle = document.querySelectorAll('.menu-dropdown__title')

    if (dropDownPreview) {
        dropDownPreview.forEach((item, i) => {
            item.addEventListener('click', function (e) {
                dropDownPreview[i].classList.toggle('_open')
                dropDownContent[i].classList.toggle('_active')
                dropDownArrow[i].classList.toggle('_active')
                dropDownTitle[i].classList.toggle('_active')
            })
        })
    }
}
