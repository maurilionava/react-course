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
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && 
        <GameScreen 
          verifyLetter={verifyLetter} 
          pickedCategory={pickedCategory} 
        />
      }
      {gameStage === 'end' && <GameOverScreen retry={retry} />}
    </div>
  );
}

export default App;
