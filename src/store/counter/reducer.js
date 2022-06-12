import * as actionType from './action-types'

const initialState = {
    value: 0
}

const counterReducer  = (state = initialState, actions) =>{
     switch(actions.type){
        case actionType.INCREMENT_VALUE:
            return{
                ...state,
                value: state.value + 1
            }
        case actionType.DECREMENT_VALUE:
            return{
                ...state,
                value: state.value - 1
            }
        case actionType.RESET_VALUE:
            return{
                ...state,
                value: 0
            }
        default:
            return state
     }
}

export default counterReducer