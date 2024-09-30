// CSS do componente
import './ProProps.css'

const ProProps = ({name, age}) => {
    return(
        <div>
            {/* CSS inline */}
            <h2 style={{color: "white"}}>Username: {name} Age: {age}</h2>
        </div>
    )
}

export default ProProps