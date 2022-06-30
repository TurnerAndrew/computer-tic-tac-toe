import "./App.css";
import { useState } from "react";
import Square from "./Square";
import Input from "./Input"
import History from './History'

function App() {

  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  const [name, setName] = useState('');
  // const [winner, setWinner] = useState('')
  const [winners, setWinners] = useState([])
  

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  let winner

  console.log('App.js player is: ' + player)

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      )
      {
        if(squares[a] === 'X'){
          winner = name
        } else {
          winner = 'Computer'
        }
      }
      if(winner){
        return `${winner} wins!`
      }
    }
    return "Who will win?";
  }


  return (
    <div className="App">
      <Input name={name} setName={setName}/>
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              index={index}
              squareValue={val}
              winner={winner}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
      <History winners={winners}/>
    </div>
  );
}

export default App;
