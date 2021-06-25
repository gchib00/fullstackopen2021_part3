const express = require('express')
const app = express()
app.use(express.json())

let persons = [
        {
            "name": "Arto Hellas",
            "number": "040-123456",
            "id": 1
        },
        {
            "name": "Ada Lovelace",
            "number": "39-44-5323523",
            "id": 2
        },
        {
            "name": "Evgeny Lowa",
            "number": "551438080",
            "id": 3
        },
        {
            "name": "Tanya Ivanko",
            "number": "43331553",
            "id": 4
        }
]




//main page
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
//show full persons json file
app.get('/api/persons/', (request, response) => {
    response.send(persons)
})
//show a single json resource
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const personObject = persons.find(person => person.id == id) 
    if (!personObject) {
        response.status(404).end("Object doesn't exist")
    }
    response.send(personObject)
})
//add new json resource
app.post('/api/persons/', (request, response) => {
    const body = request.body
    const randomID = Math.floor(Math.random() * 100000)

    const newPerson = {
        "name": body.name,
        "number": body.number,
        "id": randomID
    }
    persons = persons.concat(newPerson)
})
//delete json resource
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})
//info page
app.get('/info/', (request, response) => {
    let date = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${date}</p>`)
})









  
  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })