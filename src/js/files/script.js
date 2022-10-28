import { isMobile } from './functions.js'
import { mtrModules } from './modules.js'
import data from './data.js'


const percents = document.querySelector('.item-customers__percents')
const number = document.querySelector('.item-users__number')

let isResizeble = false
window.addEventListener('scroll', () => {
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

//! <Main Swiper>
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
//! </Main Swiper>

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
function displayTestimonialsSwiper(data) {
    const testimonialsWrapper = document.querySelector('.testimonials__wrapper')
    const { testimonialsSwiper } = data

    let displayTestimonialsSwiper = testimonialsSwiper.map((item) => {
        const { id, text, img } = item

        return `
        <div class="testimonials__slide swiper-slide slide-testimonials">
            <div class="slide-testimonials__card">
                <div class="slide-testimonials__text">
                    ${text}
                </div>
                <div class="slide-testimonials__photo">
                    <img
                        src="${img}"
                        alt="Photo"
                    />
                </div>
            </div>
        </div>
        `
    })
    displayTestimonialsSwiper = displayTestimonialsSwiper.join('')
    testimonialsWrapper.innerHTML = displayTestimonialsSwiper
}

displayTestimonialsSwiper(data)
//! </Testimonials Swiper>

//! <Help Questions>
function displayBlockHelp(data) {
    const helpWrapper = document.querySelector('.spollers-help')
    const { helpQuestions } = data

    let displayBlockHelp = helpQuestions.map((item) => {
        const { id, title, text, btnUrl, btnText } = item

        return `
        <div class="spollers-help__item">
            <button
                type="button"
                data-spoller
                class="spollers-help__title"
            >
                ${title}
            </button>
            <div class="spollers-help__body body-spollers">
                <div class="body-spollers__body">
                    <div class="body-spollers__text text">
                        ${text}
                    </div>
                    <a
                        class="body-spollers__link btn"
                        href="${btnUrl}"
                        >${btnText}</a
                    >
                </div>
            </div>
        </div>
        `
    })
    displayBlockHelp = displayBlockHelp.join('')
    helpWrapper.innerHTML = displayBlockHelp
}

displayBlockHelp(data)
//! </Help Questions>
