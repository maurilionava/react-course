import './GameScreen.css'

const GameScreen = ({verifyLetter}, {pickedCategory}) => {
    return(
        <div className="container">
            <p>Pontuação: <span name="playerScore">000</span></p>
            <h1>Adivinhe a palavra:</h1>
            <p>Dica sobre a palavra: <span name="tip">{pickedCategory}</span></p>
            <p>Você ainda tem <span name="playerLifes">03</span> tentativas.</p>

            <div className="gamePanel" name="gamePanel">
                <span name="panelGuessedLetter">A</span>
                <span name="panelBlankLetter">B</span>
                <span name="panelGuessedLetter">C</span>
                <span name="panelBlankLetter">D</span>
            </div>

            <p>Tente adivinhar uma letra da palavra</p>
            <input className="playerGuess" type="text" name="playerGuess" />
            <button onClick={verifyLetter}>JOGAR</button>
            <p>Letras já utilizadas</p>
            <div name="wrongPlayerGuesses">
                <span>a, </span>
                <span>c, </span>
            </div>
        </div>
    )
}

export default GameScreen