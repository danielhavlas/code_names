import './App.css'
import randomColor from "./helpers/randomColor"
import Board from './components/Board/Board'


function App() {

  return (
    <div className="app">
      <Board turn={randomColor()}/>
    </div>
  )
}

export default App
