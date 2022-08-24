//! <Main Swiper>
const mainSwiperData = [
    {
        id: 1,
        info: 'PLAN YOUR LIFE',
        title: `Increase your <span>productivity</span>`,
        text: `
        <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
        </p>
        `,
        btn: '../../img/plan/play.svg',
        backgroungImage: `../../img/plan/background.png`
    },
    {
        id: 2,
        info: 'Choose yourself',
        title: `Choose your <span>character</span>`,
        text: `
        <p>
            I-I-I-I'm from Hell
            Deep within the darkest place you'll ever be
            I'm from Hell
            Do the shit that demons do and make you bleed
            I'm from Hell
            Make you witness shit that you won't wanna see
            What the hell?
        </p>`,
        btn: '../../img/plan/play.svg',
        backgroungImage: `../../img/plan/background.png`
    },
    {
        id: 3,
        info: 'Just feel it',
        title: `Increase your <span>productivity</span>`,
        text: `
        <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
        </p>`,
        btn: '../../img/plan/play.svg',
        backgroungImage: `../../img/plan/background.png`
    }
]

const mainSwiper = document.getElementById('main-swiper')

function displayMainSwiper(mainSwiperItems) {
    let displayMainSwiper = mainSwiperItems.map((item) => {
        return `
        <div class="main-slide swiper-slide">
                <div class="main-slide__content">
                    <div class="main-slide__container _container">
                        <div class="main-slide__info info">
                            ${item.info}
                        </div>
                        <h1 class="main-slide__title title">
                            ${item.title}
                        </h1>
                        <div class="main-slide__text text">
                            ${item.text}
                        </div>
                        <button class="main-slide__button">
                            <img src="${item.btn}" alt="btn" />
                        </button>
                    </div>
                </div>
                <div class="main-slide__background _ibg">
                    <img src="${item.backgroungImage}" alt="backgroungImage" />
                </div>
            </div>
        `
    })
    displayMainSwiper = displayMainSwiper.join('')
    mainSwiper.innerHTML = displayMainSwiper
}

displayMainSwiper(mainSwiperData)
//! </Main Swiper>

//! <Blog Swiper>
const blogSwiperData = [
    {
        id: 1,
        title: 'How to start planning',
        text: `
            <p>
                Quidam vocibus eum ne, erat consectetuer
                voluptatibus ut nam. Eu usu vidit
                tractatos, vero tractatos ius an, in mel
                diceret persecuti. Natum petentium
                principes mei ea. Tota everti periculis
                vis ei, quas tibique pro at, eos ut
                decore ...
            </p>
        `,
        decor: '../../img/blog/loupe.svg',
        img: [
            `../../img/blog/desk_01.jpg`,
            `../../img/blog/picnic_02.jpg`,
            `../../img/blog/call-board_03.jpg`
        ],
        btns: ['Read now', 'Add to your bookmarks']
    },
    {
        id: 2,
        title: 'How to start planning',
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit
            tractatos, vero tractatos ius an, in mel
            diceret persecuti.
        </p>
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit
            tractatos, vero tractatos ius an...
        </p>`,
        decor: '../../img/blog/loupe.svg',
        img: [
            `../../img/blog/desk_01.jpg`,
            `../../img/blog/picnic_02.jpg`,
            `../../img/blog/call-board_03.jpg`
        ],
        btns: ['Read now', 'Add to your bookmarks']
    },
    {
        id: 3,
        title: 'How to start planning',
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit
            tractatos, vero tractatos ius an, in mel
            diceret persecuti. Natum petentium
            principes mei ea. Tota everti periculis
            vis ei, quas tibique pro at, eos ut
            decore ...
        </p>`,
        decor: '../../img/blog/loupe.svg',
        img: [
            `../../img/blog/desk_01.jpg`,
            `../../img/blog/picnic_02.jpg`,
            `../../img/blog/call-board_03.jpg`
        ],
        btns: ['Read now', 'Add to your bookmarks']
    }
]

const blogSwiper = document.getElementById('blog-swiper')

function displayBlogSwiper(blogSwiperItems) {
    let displayBlogSwiper = blogSwiperItems.map((item) => {
        return `
        <div class="swiper-slide">
            <div class="swiper-blog__body">
                <div class="swiper-blog__items">
                    <div class="swiper-blog__pictures blog-pictures">
                        <a href="#" class="blog-pictures__desk">
                            <img
                                src="${item.img[0]}"
                                alt="Desk"
                            />
                            <div class="blog-pictures__loupe">
                                <img
                                    src="${item.decor}"
                                    alt="Loupe"
                                />
                            </div>
                        </a>
                        <a href="#" class="blog-pictures__picnic">
                            <img
                                src="${item.img[1]}"
                                alt="Picnic"
                            />
                        </a>
                        <a href="#" class="blog-pictures__callboard">
                            <img
                                src="${item.img[2]}"
                                alt="Call-board"
                            />
                        </a>
                    </div>
                    <div class="swiper-blog__content content-blog">
                        <div class="content-blog__title title">
                            ${item.title}
                        </div>
                        <div class="content-blog__text text">
                            ${item.text}
                        </div>
                        <div class="content-blog__links">
                            <a
                                href="#"
                                class="content-blog__read btn btn__blue"
                                >${item.btns[0]}</a
                            >
                            <a href="#" class="content-blog__add"
                                >${item.btns[1]}</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    displayBlogSwiper = displayBlogSwiper.join('')
    blogSwiper.innerHTML = displayBlogSwiper
}
displayBlogSwiper(blogSwiperData)
//! </Blog Swiper>

//! <Testimonials Swiper>
const testimonialsSwiperData = [
    {
        id: 1,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 2,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos.
        </p>
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 3,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 4,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 5,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 6,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 7,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 8,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    },
    {
        id: 9,
        text: `
        <p>
            Quidam vocibus eum ne, erat consectetuer
            voluptatibus ut nam. Eu usu vidit tractatos,
            vero tractatos ius an, in mel diceret persecuti.
        </p>`,
        img: `../../img/testimonials/bill.jpg`
    }
]

const testimonialsSwiper = document.getElementById('testimonials-swiper')

function displayTestimonialsSwiper(testimonialsSwiperItems) {
    let displayTestimonialsSwiper = testimonialsSwiperItems.map((item) => {
        return `
        <div class="swiper-testimonials__card swiper-slide">
            <div class="swiper-testimonials__text">
                ${item.text}
            </div>
            <div class="swiper-testimonials__avatar">
                <img src="${item.img}" alt="Bill" />
            </div>
        </div>
        `
    })
    displayTestimonialsSwiper = displayTestimonialsSwiper.join('')
    testimonialsSwiper.innerHTML = displayTestimonialsSwiper
}

displayTestimonialsSwiper(testimonialsSwiperData)
//! </Testimonials Swiper>
