const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')


app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', (request) => {
    //we only want json data to be returned if methd is POST, otherwise it will return empty function
    if (request.method === "GET") {
        return null
    } else {
        return JSON.stringify(request.body)   
    }
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


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

    if ((body.name == "") || (body.number == "")){
        response.status(404).end("Name/Number field is empty!")
    } else {
        const newPerson = {
            "name": body.name,
            "number": body.number,
            "id": randomID
        }
        if (persons.some(person => person.name === newPerson.name)){
            response.status(404).end("Name already exists!")
        } else {
            persons = persons.concat(newPerson)
            response.status(204).end()
        }
    }
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





const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})