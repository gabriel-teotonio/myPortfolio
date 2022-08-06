
const form = document.querySelector('form')


const clearForm = (e) => {
    e.preventDefault()
    form.submit()
    form.reset()
}



form.addEventListener('submit', clearForm)