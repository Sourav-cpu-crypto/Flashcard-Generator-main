
import {CREATE_CARD,DELETE_CARD} from "../constants/actionTypes.js"

const createflashcard=(flashcard)=>{
    return {
        type:CREATE_CARD,
        payload:flashcard,
    }

}

const deleteflashcard=(id)=>{
    return {
        type:DELETE_CARD,
        payload:id,
    }

}

export {createflashcard,deleteflashcard}