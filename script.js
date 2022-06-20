console.log("teste")

const form = document.getElementById('form')
const ulElement = document.getElementById('items')
const inputElement = document.getElementById('inputText')
console.log(form)
form.addEventListener('submit', addItem);



function addItem(evento)
{
    evento.preventDefault()
    //console.log(evento.target[0].value)
    const newItem = evento.target[0].value

    let newElement = document.createElement('li')

    newElement.classList.add('item')
    newElement.appendChild(document.createTextNode(newItem))
    ulElement.insertAdjacentElement("beforeend" ,newElement)

    inputElement.textContent=""
}