import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper'

function initSliders() {
    if (document.querySelector('.main-block__slider')) {
        new Swiper('.main-block__slider', {
            modules: [Pagination, Parallax, Autoplay],
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 20,
            speed: 800,
            parallax: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.controll-main-block__dotts',
                clickable: true
            },
            on: {}
        })
    }

    if (document.querySelector('.blog__slider')) {
        new Swiper('.blog__slider', {
            modules: [Navigation, Pagination, Parallax, Autoplay],
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            watchOverflow: true,
            speed: 800,
            parallax: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            navigation: {
                prevEl: '.controll-blog__prev',
                nextEl: '.controll-blog__next'
            },
            pagination: {
                el: '.controll-blog__dotts',
                clickable: true
            },
            on: {}
        })
    }

    if (document.querySelector('.testimonials__slider')) {
        new Swiper('.testimonials__slider', {
            modules: [Pagination, Parallax, Autoplay],
            observeParents: true,
            loop: true,
            watchOverflow: true,
            speed: 800,
            parallax: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.controll-testimonials__dotts',
                clickable: true
            },
            breakpoints: {
                320: {
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 1.2,
                    spaceBetween: 40
                },
                992: {
                    slidesPerView: 1.5,
                    spaceBetween: 65
                }
            },
            on: {}
        })
    }
}

window.addEventListener('load', function (e) {
    initSliders()
})
