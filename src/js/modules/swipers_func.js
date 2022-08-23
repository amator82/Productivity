const mainSwiper = document.querySelector('.main__swiper')
const blogSwiper = document.querySelector('.blog__swiper')
const testimonialSwiper = document.querySelector('.testimonials__swiper')

let planSlider = new Swiper(mainSwiper, {
    pagination: {
        el: '.main__swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    spaceBetween: 10,
    loop: true,
    touchRatio: 1.5,
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
            spaceBetween: 10
        },
        768: {
            spaceBetween: 0,
            grabCursor: true
        }
    }
})

let blogSlider = new Swiper(blogSwiper, {
    navigation: {
        nextEl: '.blog-button__next',
        prevEl: '.blog-button__prev'
    },
    pagination: {
        el: '.blog-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 10,
    touchRatio: 1.5
})

let testimonialSlider = new Swiper(testimonialSwiper, {
    pagination: {
        el: '.testimonials-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
    touchRatio: 1.5,
    slidesPerView: 1,
    spaceBetween: 70,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInviewport: true,
        pageUpDown: true
    }
})
