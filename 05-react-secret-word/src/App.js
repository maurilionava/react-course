//css
import './App.css';

//hooks
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from './data/words'

//components
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

const stages = [
    {id: 1, name: 'start'},
    {id: 2, name: 'game'},
    {id: 3, name: 'end'}
]

function App() {
  const [words] = useState(wordsList)
  const [gameStage, setGameStage] = useState(stages[0].name)

  const [pickedCategory, setPickedCategory] = useState("")
  const [pickedWord, setPickedWord] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickCategoryAndWord = () => {
    const categoryArray = Object.keys(words)
    const category = categoryArray[Math.floor(Math.random() * categoryArray.length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]    

    return { category, word }
  }

  const startGame = () => {
    const { category, word } = pickCategoryAndWord()

    // const lettersArray = word.map((l) => l.toUpperCase())
    const lettersArray = word.toUpperCase().split("")
    setPickedCategory(category)
    setPickedWord(word)
    setLetters(lettersArray)
    console.log(`[DEBUG] Picked category: ${category} - Picked word: ${word}`)

    //change game screen
    setGameStage(stages[1].name)
  }

  const verifyLetter = (letter) => {
    console.log(letter)
    let normalizedLetter = letter

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    } 
    
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter])
      setScore((actualScore) => actualScore + 10)
      console.log(`[DEBUG] Guessed Letters: ${guessedLetters}`)
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter])
      setGuesses((actualGuesses) => actualGuesses - 1)
      console.log(wrongLetters)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates() 
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

      if(guessedLetters.length === uniqueLetters.length) {
        setScore((actualScore) => actualScore + 100)

        startGame()
      }
  }, [guessedLetters])

  const retry = () => {   
    setGuesses(3)
    setScore(0) 
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <GameScreen 
                                  verifyLetter={verifyLetter} 
                                  pickedCategory={pickedCategory} 
                                  pickedWord={pickedWord}  
                                  letters={letters}
                                  guessedLetters={guessedLetters}
                                  wrongLetters={wrongLetters}
                                  guesses={guesses}
                                  score={score}/>}
      {gameStage === 'end' && <GameOverScreen retry={retry} />}
    </div>
  );
}

export default App;
