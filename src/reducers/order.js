import * as Types from '../constants/ActionTypes'

let orders = localStorage.getItem('orders')

let initialstate = orders ? JSON.parse(orders) : []


const order = (state = initialstate, actions) => {
    let { order } = actions
    switch (actions.type) {
        case Types.CREATE_ORDER:
            state.push(order)
            console.log(state)
            localStorage.setItem('orders', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

export default order