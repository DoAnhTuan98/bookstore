import * as Types from '../constants/ActionTypes'

let initialstate = false

const statusCartitem = (state = initialstate, actions) => {

    switch (actions.type) {
        case Types.OPEN_CARTITEM:
            // let status = !state.cartItemStatus
            state = !state
            // console.log(status)
            // status = !status
            // console.log(status)
            console.log(state)
            return state
        case Types.CLOSE_CARTITEM:
            state = !state
            return state
        default:
            return state
    }
}

export default statusCartitem