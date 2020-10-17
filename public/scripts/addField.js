document.querySelector("#add-time") // procurar o botão
    .addEventListener('click', cloneField) // qundo clicar no botaão

// executar uma ação
function cloneField() {
    // duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // pegar os camppos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar
    fields.forEach(function (field) {
        // pega o field do momento
        field.value = ""
    })

    // colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

