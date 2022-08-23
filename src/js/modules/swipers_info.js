//! <Main Swiper>
const mainSwiperData = [
    {
        id: 1,
        info: 'PLAN YOUR LIFE',
        title: `Increase your <span>productivity</span>`,
        text: `<p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>`,
        btn: '../../img/plan/play.svg',
        backgroungImage: `../../img/plan/background.jpg`
    },
    {
        id: 2,
        info: 'Choose yourself',
        title: `Choose your <span>character</span>`,
        text: `
        <p>I-I-I-I'm from Hell
        Deep within the darkest place you'll ever be
        I'm from Hell
        Do the shit that demons do and make you bleed
        I'm from Hell
        Make you witness shit that you won't wanna see
        What the hell?</p>`,
        btn: '../../img/plan/play.svg',
        backgroungImage: `../../img/plan/background.jpg`
    },
    {
        id: 3,
        info: 'Just feel it',
        title: `Increase your <span>productivity</span>`,
        text: `<p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>`,
        btn: '../../img/plan/play.svg',
        backgroungImage: `../../img/plan/background.jpg`
    }
]

const mainSwiper = document.querySelector('.main__slides')

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
