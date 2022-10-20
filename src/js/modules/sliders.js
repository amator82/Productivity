import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper'

function initSliders() {
    if (document.querySelector('.main__slider')) {
        new Swiper('.main__slider', {
            modules: [Pagination, Parallax, Autoplay],
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            speed: 800,
            // parallax: true,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // },
            pagination: {
                el: '.main__swiper-pagination',
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
                clickable: true,
            },
            on: {}
        })
    }
}

window.addEventListener('load', function (e) {
    initSliders()
})
