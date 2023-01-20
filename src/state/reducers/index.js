import cardReducer from './flashcard.js'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({

    fcard: cardReducer
})

export default rootReducer;