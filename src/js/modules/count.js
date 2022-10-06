// const items = [...document.querySelectorAll('.number')]

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
