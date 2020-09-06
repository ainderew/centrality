import {useState} from "react";



export const useToggle = (initial) =>{
    const [NEW_GAME_STATE, setState] = useState(initial);

    const toggle = () =>{
        setState(prevState => !prevState)
    }
    
    return {
        NEW_GAME_STATE,
        toggle
    };

    
}

