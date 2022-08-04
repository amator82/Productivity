new Swiper('.main__swiper', {
    pagination: {
        el: '.main__swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    loop: true,
    autoHeight: true,
    breakpoints: {
        320: {
            slidesPerView: 1.05,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        }
    },
})