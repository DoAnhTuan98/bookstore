import * as Types from '../constants/ActionTypes'

export const actOpenCartItem = () => {
    return {
        type: Types.OPEN_CARTITEM
    }
}

export const actCloseCartItem = () => {
    return {
        type: Types.CLOSE_CARTITEM
    }
}