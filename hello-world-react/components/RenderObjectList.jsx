import {useState} from 'react'

const RenderObjectList = () => {
    const [cars] = useState([
        {id: 1, name: "celta", brand: "chevrolet", year: 2004, km: 204000, isNew: false, isComplete: true},
        {id: 2, name: "palio", brand: "fiat", year: 2010, km: 14540, isNew: false, isComplete: false},
        {id: 3, name: "voyage", brand: "volkswagen", year: 2014, km: 0, isNew: true, isComplete: true}
    ])

    return(
        <div>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>{car.name} - {car.brand} - {car.year} - {car.km} {car.isNew ? ("- novo") : ("- usado")} {car.isComplete && "- é completo"}</li>
                ))}
            </ul>
        </div>
    )
}

export default RenderObjectList