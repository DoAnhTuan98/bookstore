import * as Types from '../constants/ActionTypes'


let cartItem = localStorage.getItem('cart')
// console.log(JSON.parse(cartItem))

let initialstate = JSON.parse(cartItem)

let findProductInState = (state, product) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if (state[i].product.id === product.id) {
            index = i
            break
        }
    }
    return index
}

const cart = (state = initialstate, actions) => {
    let index = -1
    let { product } = actions
    switch (actions.type) {
        case Types.ADD_TO_CART:
            index = findProductInState(state, product)
            if (index !== -1) {
                state[index].quantity += 1
            }
            else {
                state.push({
                    product,
                    quantity: 1
                })
            }
            console.log(state)
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state]
        default:
            return state
    }
}

export default cart