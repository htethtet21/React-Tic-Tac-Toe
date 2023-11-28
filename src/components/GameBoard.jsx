import { useState } from "react";


export default function GameBoards({onSelectSquare,board}){
     
    // const [gameBoard,SetgameBoard]=useState(initialGameBoard);
    // function handleSelectSquare(rowIndex,colIndex){
    //     SetgameBoard((previousGameBoard)=>{
    //         const updatedGameBoard=[...previousGameBoard.map(innerArray=>[...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }
    return <ol id="game-board">
        {board.map((row,rowIndex)=><li key={rowIndex}>
         <ol>
           {row.map((PlayerSymbol,colIndex)=><li key={colIndex}>
            <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{PlayerSymbol}</button></li>)}
         </ol>
        </li>)}
    </ol>;
}