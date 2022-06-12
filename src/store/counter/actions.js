import * as actionTypes from './action-types'

export const incrementValue = () => {
    return{
        type:actionTypes.INCREMENT_VALUE
    }
}

export const decrementValue = () => {
    return{
        type:actionTypes.DECREMENT_VALUE
    }
}

export const resetValue = () => {
    return{
        type:actionTypes.RESET_VALUE
    }
}