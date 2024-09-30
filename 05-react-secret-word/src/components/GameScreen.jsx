import './GameScreen.css'
import {useState, useRef} from 'react'

const GameScreen = ({verifyLetter, pickedCategory, pickedWord, letters, guessedLetters, wrongLetters, guesses, score}) => {
    const [letter, setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        verifyLetter(letter)

        setLetter("")

        letterInputRef.current.focus()
    }
    
    return(
        <div className="container">
            <p>Pontuação: <span name="playerScore">{score}</span></p>
            <h1>Adivinhe a palavra:</h1>
            <p>Dica sobre a palavra: <span name="tip">{pickedCategory}</span></p>
            <p>Você ainda tem <span name="playerGuesses">{guesses}</span> tentativas.</p>

            <div className="gamePanel" name="gamePanel">
                { letters.map((letter,i) => (
                        guessedLetters.includes(letter) ? (<span key={i} className="guessedLetter">{letter}</span>) 
                        : (<span key={i} className="blankPanel">A</span>)
                ))}
            </div>

            <p>Tente adivinhar uma letra da palavra</p>

            <form onSubmit={handleSubmit}>
                <input className="playerGuess" maxLength="1" required type="text" name="letter" onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
                <button>JOGAR</button>
            </form>

            <p>Letras já utilizadas</p>
            <div>
                {                    
                    wrongLetters.map((letter, i) => (<span key={i} className="wrongLetter">{letter}, </span>))
                }
            </div>
        </div>
    )
}

export default GameScreen