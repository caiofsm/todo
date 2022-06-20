console.log("teste")

const form = document.getElementById('form')

console.log(form)
form.addEventListener('submit', addItem);



function addItem(evento)
{
    evento.preventDefault()
    //console.log(evento.target[0].value)
    console.dir(evento)
}