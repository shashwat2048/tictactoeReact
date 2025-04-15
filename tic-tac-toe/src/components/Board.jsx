import { useState } from "react";
import Tile from "./Tile";

function Board(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [turn , setTurn] = useState("X");
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner, setWinner] = useState(null);
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner(tiles){
        for(let i=0; i<winningCombinations.length; i++){
            const [a,b,c] = winningCombinations[i];
            if(tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]){
                setIsGameOver(true);
                setWinner(tiles[a]);
                console.log("Winner is: " + tiles[a]);
                return;
            }
        }
        for(let i=0; i<tiles.length; i++){
            if(tiles[i] === null){return;}
            if(tiles[i] !== null){
                if(i === 8){
                    setIsGameOver(true);
                    setWinner("Draw");
                    console.log("It's a draw");
                }
            }
        }
    }

    function resetGame(){
        setTiles(Array(9).fill(null));
        setTurn("X");
        setIsGameOver(false);
        setWinner(null);
        console.log("Game reset");
    }

    return(
        <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-[#23272f] text-white gap-10">
        <h1 className="text-3xl font-bold">Tic Tac Toe</h1>
        <h2 className="text-2xl font-bold">{isGameOver ? "Winner : " + winner : "Turn : " + turn}</h2>
        <div className="grid grid-rows-3 grid-cols-3 gap-[0.2em] bg-[#0074a6] border-none h-[45%] aspect-square">
        {
            tiles.map((tile, index)=>{
                return(
                    <Tile key={index} index={index} tiles={tiles} setTiles={setTiles} turn={turn} setTurn={setTurn} checkWinner={checkWinner} isGameOver={isGameOver}/>
                )
            })
        }
        </div>
        <button onClick={resetGame} className="bg-[#0074a6] text-white font-bold py-2 px-4 rounded mt-4">New Game</button>
        </div>
    )
}
export default Board;