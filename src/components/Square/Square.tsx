import { colors } from "../../types/types";
import classes from "./square.module.css";

interface SquareProps {
    color: colors
} 

const Square = ({color}: SquareProps) => {

    const _classes = [classes.square];
    switch (color) {
        case "red":
            _classes.push(classes.red);
            break;
        case "black":
            _classes.push(classes.black);
            break;
        case "blue":
            _classes.push(classes.blue);
            break;
        case "white":
            _classes.push(classes.white)
            break;
        default:
            break;
    }
    return (
        <div className={_classes.join(" ")}></div>
    )
}

export default Square