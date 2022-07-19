import {combineReducers} from 'redux'

export const productCounter = (state = 0, action: { type: string, amount: number })=>{
    switch(action.type){
        case 'INCREMENT_PRODUCT_COUNT':
            return state + 1
        case 'DECREMENT_PRODUCT_COUNT':
            return state - 1
        default:
            return state
    }
}

export const productAmount = (state = 0, action: {type: string, amount: number})=>{
    switch(action.type){
        case 'INCREMENT_PRODUCT_AMOUNT':
            return state + action.amount
        case 'DECREMENT_PRODUCT_AMOUNT':
            return state - action.amount
        default:
            return state
    }
}

const allReducers = combineReducers({
    productCounter,
    productAmount
})

export default allReducers