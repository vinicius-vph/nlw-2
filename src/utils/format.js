const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

// funcionalidades 
// ao ser selecionada uma matéria no formulário é recebido um valor 
//relativo a ela que está no array a partir de 0, com essa função o valor é 
//interpretato e transformado no nome da matéria segundo a relação na const subject
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 // como a lista dentro do array começa com valor 0 e não 1, é necessário uma expressão para diminuir sempre 1 do valor selecionado
    return subjects[position]
}

function convertHoursToMinutes (time) {
    const [hour, minutes] = time.split(":")
    return Number ((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
