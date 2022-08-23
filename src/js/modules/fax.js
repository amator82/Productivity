const faxData = [
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

const dropdownMenu = document.querySelector('.help__dropdown-menu')

function displayFaxItems(faxItems) {
    let displayFax = faxItems.map((item) => {
        return `
        <li class="menu-dropdown__link">
            <div class="menu-dropdown__preview" data-prev="prev">
                <div class="menu-dropdown__arrow"></div>
                <div class="menu-dropdown__title">
                    ${item.title}
                </div>
            </div>
            <div class="menu-dropdown__content">
                <div class="menu-dropdown__text">
                    <p>
                        ${item.desc}
                    </p>
                </div>
                <a href="#" class="menu-dropdown__button">
                    ${item.btnText}
                </a>
            </div>
        </li>
        `
    })
    displayFax = displayFax.join('')
    dropdownMenu.innerHTML = displayFax
}

function dropDown() {
    const link = document.querySelectorAll('.menu-dropdown__link')
    if (link) {
        link.forEach((prev) => {
            const preview = prev.querySelector('.menu-dropdown__preview')

            preview.addEventListener('click', (el) => {
                prev.classList.toggle('_open')

                const title = prev
                    .querySelector('.menu-dropdown__title')
                    .classList.toggle('_active')
                const arrow = prev
                    .querySelector('.menu-dropdown__arrow')
                    .classList.toggle('_active')
                const content = prev
                    .querySelector('.menu-dropdown__content')
                    .classList.toggle('_active')
            })
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    displayFaxItems(faxData)
    dropDown()
})
