const express = require('express')
const app = express()


const persons = {
    "persons": [
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
}





//requests&responses

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

app.get('/api/persons/', (request, response) => {
    response.send(persons)
})









  
  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })