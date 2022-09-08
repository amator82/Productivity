const items = [...document.querySelectorAll('.number')]
let isResizeble = false

window.addEventListener('scroll', () => {
    const scrollHeight = Math.floor(window.pageYOffset)

    if (!isResizeble && scrollHeight > 1900) {
        items.forEach((item) => {
            updateCount(item)
        })

        isResizeble = true
    }
})

const updateCount = (el) => {
    console.log(el)
    const value = parseInt(el.dataset.value)
    const increment = Math.ceil(value / 1000)

    let initialValue = 0

    const increaseValue = setInterval(() => {
        initialValue += increment

        if (initialValue > value) {
            el.textContent = `${value}`
            clearInterval(increaseValue)
            return
        }

        el.textContent = `${initialValue}`
    }, 1)
}
