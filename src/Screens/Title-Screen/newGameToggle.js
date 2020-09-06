import {useState} from "react";

// toggle  = the toggle function being used in the title screen
// NEW_GAME_STATE = state being passed to the newGameForm components

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

