import { useEffect, useState } from "react";
import { teams } from "../../types/types"
import Square from "../Square/Square";
import classes from "./board.module.css"


interface BoardProps {turn: teams}

const Board = ({turn}: BoardProps) => {

    const _classes = [classes.board, classes.borderRadius] 
    turn === "red" ? _classes.push(classes.red) : _classes.push(classes.blue)
    useEffect(() => {
        generateSquares()
    },[])
    const [colors, setColors] = useState<("red" | "blue" | "black" | "white")[]>()
    const redCount = 7 + (turn === "red" ? 1 : 0);
    const blueCount = 7 + (turn === "red" ? 0 : 1);
    
    const generateSquares = () => {
        const squares = Array(9).fill("white")
        squares.push("black")
        const reds: string[] = Array(redCount).fill("red");
        const blues: string[] = Array(blueCount).fill("blue");
        setColors([...reds, ...blues, ...squares].sort(() => Math.random() - 0.5))
    }


    console.log(colors);
    
    
    const squares = colors?.map((v, i) => {
        return <Square key={i} color={v} />
    })



    return (
        <div className={_classes.join(" ")}>
            {squares}
        </div>
    );
}

export default Board