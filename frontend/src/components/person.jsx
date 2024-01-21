const Person = ({person, index, action}) => {
    return (
        <div>
            <p key={index}>{person.name} {person.number} <button onClick={action}>delete</button></p>
        </div>
    )
}

export default Person