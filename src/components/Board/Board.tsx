import { useEffect, useState } from "react";
import { teams } from "../../types/types"
import Square from "../Square/Square";
import classes from "./board.module.css"


interface BoardProps {turn: teams}

const Board = ({turn}: BoardProps) => {

    const _classes = [classes.board, classes.borderRadius, turn == "red" ? classes.red : classes.blue] 
    
    useEffect(() => {
        generateSquares()
    },[])
    const [colors, setColors] = useState<("red" | "blue" | "black" | "white")[]>()

    console.log(turn);
    
    const generateSquares = () => {
        const redCount = 8 + (turn == "red" ? 1 : 0);
        const blueCount = 8 + (turn == "blue" ? 1 : 0);
        const squares = Array(7).fill("white")
        squares.push("black")
        const reds = Array(redCount).fill("red");
        const blues = Array(blueCount).fill("blue");
        setColors([...reds, ...blues, ...squares].sort(() => Math.random() - 0.5))
    }

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