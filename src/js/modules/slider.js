const mainSlider = document.querySelector('.main__swiper')
const secondSlider = document.querySelector('.blog__swiper')

let planSlider = new Swiper(mainSlider, {
    pagination: {
        el: '.main__swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    loop: true,
    autoHeight: true,
    simulateTouch: true,
    touchRatio: 1.5,
    slideToClickedSlide: true,
    autoplay: {
        delay: 5000
    },
    keyboard: {
        //? Включить/выключить
        enabled: true,
        //? Включить/выключить только когда слайдер в пределах вьювпорта
        onlyInviewport: true,
        //? Включить/выключить управление клавишами PageUp, PageDown
        pageUpDown: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1.05,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true
        }
    }
})

let blogSlider = new Swiper(secondSlider, {
    navigation: {
        nextEl: '.blog-button__next',
        prevEl: '.blog-button__prev'
    },
    pagination: {
        el: '.blog-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
    slidesPerView:1
})
