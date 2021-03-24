import handleSubmit from './js/formHandler'

import style from './styles/style.scss';

window.addEventListener('DOMContentLoaded', () => {
    
    const buttonSubmit = document.querySelector('#btn-submit')
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        handleSubmit()
    })
})
export { handleSubmit }
