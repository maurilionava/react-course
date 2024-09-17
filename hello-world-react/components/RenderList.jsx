import {useState} from 'react'

const RenderList = () => {
    const [names] = useState(["Abrão", "Bruna", "Carlos"])

    return(
        <div>
            <ul>
                {names.map((name, i)=>(
                    <li key={i}>{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderList