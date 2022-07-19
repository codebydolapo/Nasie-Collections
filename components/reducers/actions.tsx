export const incrementProductCount = ()=>{
    return {
        type: 'INCREMENT_PRODUCT_COUNT'
    }
}

export const decrementProductCount = ()=>{
    return {
        type: 'DECREMENT_PRODUCT_COUNT'
    }
}

export const incrementProductAmount = (amount: number)=>{
    return {
        type: 'INCREMENT_PRODUCT_AMOUNT',
        amount: amount
    }
}
export const decrementProductAmount = (amount: number)=>{
    return {
        type: 'DECREMENT_PRODUCT_AMOUNT',
        amount: amount
    }
}
