const todoItem = document.querySelectorAll('.item')
const botaoEnviar = document.querySelector('.botao')

todoItem.forEach(input  => {
    input.addEventListener('input', () => {
        if (input.value != "") {
            input.classList.add('correto')
            input.classList.remove('erro')
            input.nextElementSibling.classList.remove('erro')
        } else {
            input.classList.remove('correto') 
        }
    })   
})

botaoEnviar.addEventListener('click', (e) => {
    todoItem.forEach(input => {
            if (input.value === ""){
                e.preventDefault()
                input.classList.add('erro')
                input.nextElementSibling.classList.add('erro')
            } else {
                input.classList.remove('erro')
                input.nextElementSibling.classList.remove('erro')
            }
        })
    })