import React from "react";

const Square = (props) => {
  console.log('Square player is ' + props.player)

  const chooseRandomSquare = () => {
    return Math.floor(Math.random() * 8)
  }

  const markSquare = () => {
    props.setPlayer(!props.player);
    props.setSquares(props.squares);
  }

  const computerChoice = () => {
    let choice = chooseRandomSquare()
    while(props.squares[choice] !== ''){
      choice = chooseRandomSquare()
    }
    props.squares.splice(choice, 1, "O")
    markSquare()
   }

  const handleClick = () => {
      props.squares.splice(props.index, 1, "X");
      markSquare()
      if(!props.winner){
        computerChoice()
      }
    };

  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}
    </div>
  );
};

export default Square;
