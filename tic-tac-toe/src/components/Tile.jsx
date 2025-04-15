function Tile({index, setTiles, turn, setTurn, tiles, checkWinner, isGameOver}){
    function handleClick(){
        if(isGameOver){
            return;
        }
        setTiles((prevTiles)=>{
            if(prevTiles[index] !== null){
                return prevTiles
            }
            const newTiles = [...prevTiles];
            newTiles[index] = turn;
            checkWinner(newTiles);
            setTurn(turn === "X" ? "O" : "X");
            console.log(newTiles);
            return newTiles;
        });
    }
    if(tiles[index] === "X"){
        return (
            <div onClick={handleClick} className="bg-[#23272f] border-none text-[#20f4ff] flex justify-center items-center text-4xl font-bold">
                {tiles[index]}
            </div>
        )
    }
    else if(tiles[index] === "O"){
        return (
            <div onClick={handleClick} className="bg-[#23272f] border-none text-[#ff1414] flex justify-center items-center text-4xl font-bold">
                {tiles[index]}
            </div>
        )
    }
    else{
        return (
            <div onClick={handleClick} className="bg-[#23272f] border-none text-[#ffffff] flex justify-center items-center text-4xl font-bold">
                {tiles[index]}
            </div>
        )
    }
}
export default Tile;