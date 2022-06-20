console.log("teste")

const form = document.getElementById('form')
const ulElement = document.getElementById('items')
const inputElement = document.getElementById('inputText')

form.addEventListener('submit', addItem);
let itemCount=0




function addItem(evento)
{
    evento.preventDefault()
    const newItem = evento.target[0].value
    
    let newElement = document.createElement('li')
    newElement.classList.add('item')
    newElement.id = 'item' + itemCount
    //newElement.appendChild(document.createTextNode(newItem))
    let pElement = document.createElement('p')
    pElement.appendChild(document.createTextNode(newItem))
    newElement.appendChild(pElement)
    // console.dir(newElement)
    ulElement.insertAdjacentElement('afterbegin', newElement)
    
    let removeButtonElement = document.createElement('a')
    removeButtonElement.classList.add('removeButton')
    removeButtonElement.appendChild(document.createTextNode('x'))
    removeButtonElement.setAttribute('href', '#')
    removeButtonElement.addEventListener('click', removeButton)
    newElement.insertAdjacentElement("beforeend", removeButtonElement)

    inputElement.textContent=''
    itemCount++
}

function removeButton(evento)
{
    evento.target.parentElement.remove();
}