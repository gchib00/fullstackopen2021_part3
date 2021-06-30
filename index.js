const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config() //Takes variables from .env
const Person = require('./models/person')
const person = require('./models/person')


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


//show full persons json file
app.get('/api/persons/', (request, response) => {
    Person.find({}).then(person => {
        response.json(person)
    })
})
//show a single json resource
app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
            response.json(person)
    })
})
//add new json resource
app.post('/api/persons/', (request, response) => {
    const body = request.body

    const newPerson = new Person({
        "name": body.name,
        "number": body.number,
    })

    newPerson.save().then(person => {
        response.json(person)
    })
})
//delete json resource
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})
//update address of json resource
app.put('/api/persons/:id', (request, response) => {
    const body = request.body
    const updatedPerson = {
        name: body.name,
        number: body.number,
    }
    Person.findByIdAndUpdate(request.params.id , updatedPerson, { new: true })
        .then(person => {
            response.json(person)
        })
        .catch(error => console.log(`Something happened on backend: ${error}`))
})
//info page
app.get('/info/', (request, response) => {
    let date = new Date()
    response.send(`<p>Phonebook has info for ??? people</p> <p>${date}</p>`)
})











const errorHandler = (error, request, response, next) => {
    console.log("ERROR NAME: ",error.name)

    if (error.name === 'ReferenceError'){
        return response.status(400).send(`Conact doesn't exist!`)
    }


    next(error) //prints error and throws 404
}

app.use(errorHandler)






const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
