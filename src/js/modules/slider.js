new Swiper('.main__swiper', {
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
