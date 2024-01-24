const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const args = process.argv

const url = `mongodb+srv://niiloilehtonen:${args[2]}@cluster0.urpvrlc.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: args[3],
  number: args[4],
})

if (args.length === 3) {
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((person) => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
} else {
  person.save().then(() => {
    console.log(`added ${args[3]} number ${args[4]} to phonebook`)
    mongoose.connection.close()
  })
}
