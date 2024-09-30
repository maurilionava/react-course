import {useState} from 'react'

const PreviousState = () => {
    const [values, setValues] = useState([{id:1,name:"John",age:30}, {id:2,name:"Mary",age:21}, {id:3,name:"Katy",age:45}, {id:4,name:"Hellen",age:50}])

    const randomRemove = () => {
        setValues((prevValues) => (
            prevValues.filter(v => v.id !== 1)
        ))
    }

    return(
        <div>
            <ul>
                {values.map((value) => (
                    <li key={value.id}>{value.name}</li>
                ))}
            </ul>

            <button onClick={randomRemove}>Random Remove</button>
        </div>
    )
}

export default PreviousState