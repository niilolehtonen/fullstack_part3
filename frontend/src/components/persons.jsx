import Person from './person.jsx'

const Persons = ({persons, filterName, action}) => {
    
    const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(filterName.toLowerCase())
  )

    return(
        <div>
        {filteredPersons.map((person, index) => (
            <Person key={index} person={person} action={() => action(person.id)}/>
          ))}
        </div>
    )
}

export default Persons