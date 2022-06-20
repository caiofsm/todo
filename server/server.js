const express =require('express');

const app = express()
const port = 3000

const data = ['Teste 1', 'Teste 2', 'Teste 3']

app.get('/todo', (req, res) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(data))
})

app.listen(port, () =>
{
    console.log(`Escutando ${port}`)
})