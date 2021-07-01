// const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//   process.exit(1)
// }

// const password = process.argv[2]

// const fullName = () => {
//   let personFullName = process.argv[3]
//   for (let i=4; i<process.argv.length-1; i++) {
//     personFullName += ` ${process.argv[i]}`
//   }
//   return personFullName
// }
// let name = (process.argv.length === 4 ? process.argv[3] : fullName())
// let number = process.argv[process.argv.length-1]



// const url =
//   `mongodb+srv://fullstack-phonebook-app:${password}@cluster0.j7uur.mongodb.net/phonebook-app?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// const personSchema = new mongoose.Schema({
//   name: String,
//   number: String
// })

// const Person = mongoose.model('Person', personSchema)

// const contact = new Person(
//   {
//     name: name,
//     number: number
//   }
// )

// if (process.argv.length == 3) {
  
//   console.log('Phonebook:')
//   const fetchContacts =  () => {
//     console.log("started to fetch data.........")
//     Person
//     .find({})
//     .then(result => {
//       result.forEach(person => {
//         console.log(person.name, person.number)
//       })
//       console.log('done...') 
//       mongoose.connection.close()
//     })
//   }
//   fetchContacts()  
// } else {
//   contact.save().then(result => {
//       console.log(`added ${name} number ${number} to the phonebook`)
//       mongoose.connection.close()
//   })
// }

