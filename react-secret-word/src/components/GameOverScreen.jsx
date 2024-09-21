import styles from './GameOverScreen.css'

const GameOver = ({retry}) => {
    return(
        <div>
        <h1>Game Over Screen</h1>
        <button onClick={retry}>Retry</button>
        </div>
    )
}

export default GameOver