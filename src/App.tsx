import { useEffect, useState } from 'react'
import './App.css'
import { teams } from './types/types'
import randomColor from "./helpers/randomColor"
import Board from './components/Board/Board'


function App() {
  const [turn, setTurn] = useState<teams>("red");

  useEffect(() => {
    setTurn(randomColor());
  },[])


  return (
    <div className="app">
      <Board turn={turn} />
    </div>
  )
}

export default App
