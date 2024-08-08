import { teams } from "../types/types";

const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    return ["red", "blue"][randomNumber] as teams
    
}

export default randomColor