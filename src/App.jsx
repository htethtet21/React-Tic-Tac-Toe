import { useState } from "react"
import Player from "./components/Player.jsx"
import GameBoards  from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";
import { WinningCombinations } from "./components/WinningCombination.jsx";
import GameOver from "./components/GameOver.jsx";
function deriveActivePlayer(gameturn){
  let currentPlayer='X';
      if(gameturn.length>0 && gameturn[0].player==='X'){
        currentPlayer='O';
      }
      return currentPlayer;
}

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function App() {
  const[gameturn,setgameturn]=useState([]);
  
  const activePlayer=deriveActivePlayer(gameturn);
  let gameBoard=[...initialGameBoard.map(array=>[...array])];
  for(const turn of gameturn){
     const{square,player}=turn;
     const{row,col}=square;
     gameBoard[row][col]=player;

  }
  
let winner=null;
  // const[hasWinner,sethasWinner]=useState(false);
  for(const combination of WinningCombinations){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].col];
    if(firstSquareSymbol && firstSquareSymbol=== secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol){
     winner=firstSquareSymbol;
    }
  }
  const hasDraw=gameturn.length===9 && !winner;

  // const[activePlayer,setactivePlayer]=useState('X');
  
  function handleSelectPlayer(rowIndex,colIndex){
    // setactivePlayer((activeone)=> activeone==='X'?'O':'X');
    setgameturn((prevturn)=>{
      const currentPlayer=deriveActivePlayer(prevturn);
      
      const updateturn=[{
        square :{row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevturn,
      ];
      return updateturn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>

        </ol>
        {(winner || hasDraw) && <GameOver winner={winner}/>}
        <GameBoards onSelectSquare={handleSelectPlayer} board={gameBoard}/>
      </div>
      <Log turns={gameturn}/>
    </main>
  )
}

export default App
