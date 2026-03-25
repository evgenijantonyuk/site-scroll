const buttonTop = document.querySelector('.btn__top')

const showButton = () => {
    window.addEventListener('scroll', () => {

        if (window.scrollY > 100) {
            buttonTop.classList.add('show')
        } else {
            buttonTop.classList.remove('show')
        }
    })
}

const scrollToTop = () => {
    buttonTop.addEventListener('click', () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}

showButton()
scrollToTop()