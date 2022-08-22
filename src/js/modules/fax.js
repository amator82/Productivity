const data = [
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
console.log(dropdownMenu)

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(data)
    dropDown()
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `
        <li class="menu-dropdown__link" data-link="link">
            <div class="menu-dropdown__preview">
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
    displayMenu = displayMenu.join('')
    dropdownMenu.innerHTML = displayMenu
}

function dropDown() {
    const link = document.querySelectorAll('.menu-dropdown__link')
    link.forEach((prev) => {
        const preview = prev.querySelectorAll('.menu-dropdown__preview')
        const content = prev.querySelectorAll('.menu-dropdown__content')

        prev.addEventListener('click', (el) => {
            prev.classList.toggle('_open')

            preview.forEach((item) => {
                const arrow = item
                    .querySelector('.menu-dropdown__arrow')
                    .classList.toggle('_active')
                const title = item
                    .querySelector('.menu-dropdown__title')
                    .classList.toggle('_active')
            })
            content.forEach((e) => {
                e.classList.toggle('_active')
            })
        })
    })
}