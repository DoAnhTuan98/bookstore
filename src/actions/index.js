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

export const actOpenFormSignUp = () => {
    return {
        type: Types.OPEN_FORM_SIGNUP
    }
}

export const actOpenFormSignIn = () => {
    return {
        type: Types.OPEN_FORM_SIGNIN
    }
}

export const actReadMore = () => {
    return {
        type: Types.READ_MORE
    }
}

export const actOverflowHidden = () => {
    return {
        type: Types.OVERFLOW_HIDDEN
    }
}

