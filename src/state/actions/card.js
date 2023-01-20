
import {CREATE_CARD} from "../constants/actionTypes.js"

const createflashcard=(flashcard)=>{
    return {
        type:CREATE_CARD,
        payload:flashcard,
    }

}



export {createflashcard}