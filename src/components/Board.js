import React , {useState} from "react";
import './styles/Board.css';
import Square from "./Square";
function Board() {

  var status = 'Current player: X';
  const [board, setBoard] = useState(Array.apply(null, Array(9)));
  const [currPlayer, setCurrPlayer] = useState("X");


    function getWinner(board) {
      const winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (let i = 0; i < winCondition.length; i++) {
        const [a, b, c] = winCondition[i];
        const a_Player = board[a];
        if (a_Player != null) { //first pos in win condition occupied
          if (board[b] === a_Player && (board[c] === a_Player)) { //rest 2 pos occupied by a_player
            return a_Player;
          }
        }
      }
      return null;
    }

    function clickEventHandler(i) {
      const currBoard = board.slice();
      if (!getWinner(currBoard) //no winner yet
      && (currBoard[i] == null)) { //board empty
        currBoard[i] = currPlayer;
        setBoard(currBoard);
        if (currPlayer === "X") {
          setCurrPlayer("*");
        } else {
          setCurrPlayer("X");
        }

      }
    }

    function renderSquare(i) {
      return <Square value={board[i]} onClick={() => clickEventHandler(i)}/>;
    }

    function resetGame() {
      const ogBoard = Array.apply(null, Array(9));
      setBoard(ogBoard);
    }

  const winner = getWinner(board)
  if (winner != null) {
    status = "Winner: " + winner;
  } else {
    status = "Current Player: " + currPlayer;
  }

    return (  
        <div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
          <button onClick = {resetGame}> Reset</button>
        </div>
    )
}

export default Board;