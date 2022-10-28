import { isMobile } from './functions.js'
import { mtrModules } from './modules.js'

const data = {
    mainBlockSwiperData: [
        {
            id: 1,
            info: 'PLAN YOUR LIFE',
            title: `Increase your <span>productivity</span>`,
            text: `
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
                `,
            btn: '../../img/main-block/play.svg',
            backgroungImage: `../../img/main-block/background.png`,
            decor: {
                1: `../../img/main-block/decor/01.svg`,
                2: `../../img/main-block/decor/02.svg`,
                3: `../../img/main-block/decor/03.svg`,
                4: `../../img/main-block/decor/04.svg`,
                5: `../../img/main-block/decor/05.svg`,
                6: `../../img/main-block/decor/06.svg`,
                7: `../../img/main-block/decor/07.svg`,
                8: `../../img/main-block/decor/08.svg`,
                9: `../../img/main-block/decor/09.svg`,
                10: `../../img/main-block/decor/10.svg`,
                11: `../../img/main-block/decor/11.svg`,
                12: `../../img/main-block/decor/12.svg`,
                13: `../../img/main-block/decor/13.svg`
            }
        },
        {
            id: 2,
            info: 'Choose yourself',
            title: `Choose your <span>character</span>`,
            text: `
                    I-I-I-I'm from Hell
                    Deep within the darkest place you'll ever be
                    I'm from Hell
                    Do the shit that demons do and make you bleed
                    I'm from Hell
                    Make you witness shit that you won't wanna see
                    What the hell?
                `,
            btn: '../../img/main-block/play.svg',
            backgroungImage: `../../img/main-block/background.png`,
            decor: {
                1: `../../img/main-block/decor/01.svg`,
                2: `../../img/main-block/decor/02.svg`,
                3: `../../img/main-block/decor/03.svg`,
                4: `../../img/main-block/decor/04.svg`,
                5: `../../img/main-block/decor/05.svg`,
                6: `../../img/main-block/decor/06.svg`,
                7: `../../img/main-block/decor/07.svg`,
                8: `../../img/main-block/decor/08.svg`,
                9: `../../img/main-block/decor/09.svg`,
                10: `../../img/main-block/decor/10.svg`,
                11: `../../img/main-block/decor/11.svg`,
                12: `../../img/main-block/decor/12.svg`,
                13: `../../img/main-block/decor/13.svg`
            }
        },
        {
            id: 3,
            info: 'Just feel it',
            title: `Increase your <span>productivity</span>`,
            text: `
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
            `,
            btn: '../../img/main-block/play.svg',
            backgroungImage: `../../img/main-block/background.png`,
            decor: {
                1: `../../img/main-block/decor/01.svg`,
                2: `../../img/main-block/decor/02.svg`,
                3: `../../img/main-block/decor/03.svg`,
                4: `../../img/main-block/decor/04.svg`,
                5: `../../img/main-block/decor/05.svg`,
                6: `../../img/main-block/decor/06.svg`,
                7: `../../img/main-block/decor/07.svg`,
                8: `../../img/main-block/decor/08.svg`,
                9: `../../img/main-block/decor/09.svg`,
                10: `../../img/main-block/decor/10.svg`,
                11: `../../img/main-block/decor/11.svg`,
                12: `../../img/main-block/decor/12.svg`,
                13: `../../img/main-block/decor/13.svg`
            }
        }
    ],
    blogSwiper: [
        {
            id: 1,
            title: 'How to start planning',
            text: `
                    Quidam vocibus eum ne, erat consectetuer
                    voluptatibus ut nam. Eu usu vidit
                    tractatos, vero tractatos ius an, in mel
                    diceret persecuti. Natum petentium
                    principes mei ea. Tota everti periculis
                    vis ei, quas tibique pro at, eos ut
                    decore ...
            `,
            decor: '../../img/blog/loupe.svg',
            img: [
                `../../img/blog/desk_01.jpg`,
                `../../img/blog/picnic_02.jpg`,
                `../../img/blog/call-board_03.jpg`
            ]
        },
        {
            id: 2,
            title: 'How to start planning',
            text: `
                Quidam vocibus eum ne, erat consectetuer
                voluptatibus ut nam. Eu usu vidit
                tractatos, vero tractatos ius an, in mel
                diceret persecuti.
                Quidam vocibus eum ne, erat consectetuer
                voluptatibus ut nam. Eu usu vidit
                tractatos, vero tractatos ius an...
            `,
            decor: '../../img/blog/loupe.svg',
            img: [
                `../../img/blog/desk_01.jpg`,
                `../../img/blog/picnic_02.jpg`,
                `../../img/blog/call-board_03.jpg`
            ]
        },
        {
            id: 3,
            title: 'How to start planning',
            text: `
                Quidam vocibus eum ne, erat consectetuer
                voluptatibus ut nam. Eu usu vidit
                tractatos, vero tractatos ius an, in mel
                diceret persecuti. Natum petentium
                principes mei ea. Tota everti periculis
                vis ei, quas tibique pro at, eos ut
                decore ...
            `,
            decor: '../../img/blog/loupe.svg',
            img: [
                `../../img/blog/desk_01.jpg`,
                `../../img/blog/picnic_02.jpg`,
                `../../img/blog/call-board_03.jpg`
            ]
        }
    ],
    testimonialsSwiper: [
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
    ],
    helpContent: [
        {
            id: 1,
            title: 'Reque insolens in vel?',
            desc: `I wish I found some better sounds no one's ever heard
            I wish I had a better voice that sang some better words
            I wish I found some chords in an order that is new`,
            btnText: 'Go to documentation'
        },
        {
            id: 2,
            title: 'Vis rebum error graecis ea, id sit postea accusamus?',
            desc: `I wish I didn't have to rhyme every time I sang
            I was told when I get older, all my fears would shrink
            But now I'm insecure, and I care what people think`,
            btnText: 'Say hello'
        },
        {
            id: 3,
            title: 'Lorem repudiandae ne nec?',
            desc: `My name's Blurryface and I care what you think
            My name's Blurryface and I care what you think`,
            btnText: 'Netflix'
        },
        {
            id: 4,
            title: 'Ad dicit numquam vel. Et eos iudico feugait percipitur?',
            desc: `Wish we could turn back time
            To the good old days
            When our momma sang us to sleep
            But now we're stressed out (oh)`,
            btnText: 'YouTube'
        },
        {
            id: 5,
            title: 'Sea no dico percipitur. Fierent constituam definitiones id eum?',
            desc: `Wish we could turn back time (oh)
            To the good old days (oh)
            When our momma sang us to sleep
            But now we're stressed out`,
            btnText: 'Google Translate'
        }
    ]
}

// const items = [...document.querySelectorAll('.number')]

const percents = document.querySelector('.item-customers__percents')
const number = document.querySelector('.item-users__number')

window.addEventListener('scroll', () => {
    let isResizeble = false
    const scrollHeight = Math.floor(window.pageYOffset)

    if (!isResizeble && scrollHeight > 1350) {
        updateCount(percents, 10, 0, '%')
        updateCount(number, 1, 2000, '+')

        isResizeble = true
    }
})

const updateCount = (el, interval, initialValue, decor) => {
    const value = parseInt(el.dataset.value)
    const increment = Math.ceil(value / 1000)

    const increaseValue = setInterval(() => {
        initialValue += increment

        if (initialValue > value) {
            el.textContent = `${value + decor}`
            clearInterval(increaseValue)
            return
        }

        el.textContent = `${initialValue + decor}`
    }, interval)
}

//!===============<Main Swiper>============================
function displayMainBlockSwiper(data) {
    const mainBlockWrapper = document.querySelector('.main-block__wrapper')
    const { mainBlockSwiperData } = data

    let displayMainBlockSwiper = mainBlockSwiperData.map((item) => {
        const { id, info, title, text, btn, backgroungImage, decor } = item

        return `
                <div
                data-prlx-parent
                class="main-block__slide swiper-slide slide-main-block"
            >
                <div class="slide-main-block__container">
                    <div class="slide-main-block__content">
                        <div
                            class="slide-main-block__info info"
                        >
                            ${info} 
                        </div>
                        <h1
                            class="slide-main-block__title title"
                        >
                            
                            ${title}
                        </h1>
                        <div
                            class="slide-main-block__text text"
                        >
                            ${text}
                        </div>
                        <button
                            class="slide-main-block__button"
                        >
                            <img
                                src="${btn}"
                                alt="btn"
                            />
                        </button>
                    </div>
                </div>
                <div
                    class="slide-main-block__background slide-main-block__background-ibg"
                >
                    <img
                        src="${backgroungImage}"
                        alt="backgroung-image"
                    />
                </div>
                <div
                    data-coefficient="100"
                    data-prlx
                    data-direction="1"
                    class="slide-main-block__decor decor-main-block"
                >
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_1"
                    >
                        <img
                            src="${decor[1]}"
                            alt="01"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        class="decor-main-block__item decor-main-block__item_2"
                    >
                        <img
                            src="${decor[2]}"
                            alt="02"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_3"
                    >
                        <img
                            src="${decor[3]}"
                            alt="03"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        class="decor-main-block__item decor-main-block__item_4"
                    >
                        <img
                            src="${decor[4]}"
                            alt="04"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_5"
                    >
                        <img
                            src="${decor[5]}"
                            alt="05"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        class="decor-main-block__item decor-main-block__item_6"
                    >
                        <img
                            src="${decor[6]}"
                            alt="06"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_7"
                    >
                        <img
                            src="${decor[7]}"
                            alt="07"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        class="decor-main-block__item decor-main-block__item_8"
                    >
                        <img
                            src="${decor[8]}"
                            alt="08"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_9"
                    >
                        <img
                            src="${decor[9]}"
                            alt="09"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        class="decor-main-block__item decor-main-block__item_10"
                    >
                        <img
                            src="${decor[10]}"
                            alt="10"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_11"
                    >
                        <img
                            src="${decor[11]}"
                            alt="11"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        class="decor-main-block__item decor-main-block__item_12"
                    >
                        <img
                            src="${decor[12]}"
                            alt="12"
                        />
                    </div>
                    <div
                        data-prlx-mouse
                        data-prlx-cx="90"
                        data-prlx-cy="90"
                        data-prlx-dxr
                        data-prlx-dyr
                        class="decor-main-block__item decor-main-block__item_13"
                    >
                        <img
                            src="${decor[13]}"
                            alt="13"
                        />
                    </div>
                </div>
            </div>
        `
    })

    displayMainBlockSwiper = displayMainBlockSwiper.join('')
    mainBlockWrapper.innerHTML = displayMainBlockSwiper
}

displayMainBlockSwiper(data)
//!===============</Main Swiper>============================

//! <Blog Swiper>

function displayBlogSwiper(data) {
    const blogSwiperWrapper = document.querySelector('.blog__wrapper')
    const { blogSwiper } = data

    let displayBlogSwiper = blogSwiper.map((item) => {
        const { id, title, text, img } = item
        return `
            <div
            class="blog__slide swiper-slide slide-blog"
        >
            <div class="slide-blog__body">
                <div
                    data-swiper-parallax="-100"
                    class="slide-blog__images images-blog"
                >
                    <div
                        class="images-blog__item-ibg images-blog__item_1"
                    >
                        <img
                            src="${img[0]}"
                            alt="image"
                        />
                    </div>
                    <div
                        class="images-blog__item-ibg images-blog__item_2"
                    >
                        <img
                            src="${img[1]}"
                            alt="image"
                        />
                    </div>
                    <div
                        class="images-blog__item-ibg images-blog__item_3"
                    >
                        <img
                            src="${img[2]}"
                            alt="image"
                        />
                    </div>
                </div>
                <div
                    data-swiper-parallax="-150"
                    class="slide-blog__content content-slide-blog"
                >
                    <div
                        class="content-slide-blog__title title"
                    >
                        ${title}
                    </div>
                    <div
                        class="content-slide-blog__text text"
                    >
                        ${text}
                    </div>
                    <div
                        class="content-slide-blog__buttons"
                    >
                        <button
                            class="content-slide-blog__buttons_1 btn btn__blue"
                            type="button"
                        >
                            Read now
                        </button>
                        <button
                            class="content-slide-blog__buttons_2 btn"
                            type="button"
                        >
                            Add to your bookmarks
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    displayBlogSwiper = displayBlogSwiper.join('')
    blogSwiperWrapper.innerHTML = displayBlogSwiper
}

displayBlogSwiper(data)
//! </Blog Swiper>

//! <Testimonials Swiper>

// const testimonialsSwiper = document.getElementById('testimonials-swiper')

// function displayTestimonialsSwiper(testimonialsSwiperItems) {
//     let displayTestimonialsSwiper = testimonialsSwiperItems.map((item) => {
//         return `
//         <div class="swiper-testimonials__card swiper-slide">
//             <div class="swiper-testimonials__text">
//                 ${item.text}
//             </div>
//             <div class="swiper-testimonials__avatar">
//                 <img src="${item.img}" alt="Bill" />
//             </div>
//         </div>
//         `
//     })
//     displayTestimonialsSwiper = displayTestimonialsSwiper.join('')
//     testimonialsSwiper.innerHTML = displayTestimonialsSwiper
// }

// displayTestimonialsSwiper(testimonialsSwiperData)
//! </Testimonials Swiper>
