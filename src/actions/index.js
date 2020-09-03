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

export const actFilterCategory = (category) => {
    return {
        type: Types.FILTER_CATEGORY,
        category
    }
}

export const actGetAllProduct = () => {
    return {
        type: Types.GET_ALL_PRODUCT
    }
}

export const actFindProduct = (name) => {
    return {
        type: Types.FIND_PRODUCT,
        name
    }
}

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actDecreaseCart = (product, quantity) => {
    return {
        type: Types.DECREASE_CART,
        product,
        quantity
    }
}

export const actDeleteCart = (product) => {
    return {
        type: Types.DELETE_CART,
        product
    }
}

export const actGetOneProduct = (id) => {
    return {
        type: Types.GET_ONE_PRODUCT,
        id
    }
}

export const actCartBtnClick = () => {
    return {
        type: Types.CARTBTN_CLICK
    }
}

export const actToggleProfileForm = () => {
    return {
        type: Types.TOGGLE_PROFILE_FORM
    }
}

export const actLogin = (account) => {
    return {
        type: Types.LOGIN,
        account
    }
}

export const actCreateOrder = (order) => {
    return {
        type: Types.CREATE_ORDER,
        order
    }
}