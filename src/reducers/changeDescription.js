import * as Types from '../constants/ActionTypes'

let initialstate = false

const changeDes = (state = initialstate, actions) => {
    switch (actions.type) {
        case Types.READ_MORE:
            state = true
            return state
        case Types.OVERFLOW_HIDDEN:
            state = false
            return state
        default:
            return state
    }

}

export default changeDes