import * as Types from '../constants/ActionTypes'
import callApi from '../utils/apiCaller'

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

export const actFilterCategoryRequest = (category) => {
    return async (dispatch) => {
        const res = await callApi(`api/product?category=${category}`, 'GET', null)
        let products = res.data
        dispatch(actFilterCategory(products))
    }
}

export const actFilterCategory = (products) => {
    return {
        type: Types.FILTER_CATEGORY,
        products
    }
}

export const actGetAllProductRequest = () => {
    return async (dispatch) => {
        const res = await callApi('api/product', 'GET', null)
        let products = res.data
        dispatch(actGetAllProduct(products))
    }
}

export const actGetAllProduct = (products) => {
    return {
        type: Types.GET_ALL_PRODUCT,
        products
    }
}

export const actFindProductRequest = (name) => {
    return async (dispatch) => {
        const res = await callApi(`api/product?name=${name}`)
        let product = res.data
        dispatch(actFindProduct(product))
    }
}

export const actFindProduct = (product) => {
    return {
        type: Types.FIND_PRODUCT,
        product
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

export const actRemoveAllCart = () => {
    return {
        type: Types.REMOVE_ALL_CART
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

export const actLoginRequest = (account) => {
    return (dispatch) => {
        callApi('api/auth/sign-in', 'POST', account).then(res => {
            dispatch(actLogin(res.data)) // res.data = user
        }).catch(error => console.log(error.response.data.message))
        // console.log(res.message)
        // let user = res.data
        // dispatch(actLogin(user))
    }
}

export const actLogin = (user) => {
    return {
        type: Types.LOGIN,
        user
    }
}

export const actLogout = () => {
    return {
        type: Types.LOGOUT
    }
}

export const actCreateOrder = (order) => {
    return {
        type: Types.CREATE_ORDER,
        order
    }
}

export const actGetAllOrderRequest = (user) => {
    return async (dispatch) => {
        console.log(user.email)
        const res = await callApi(`api/order?email=${user.email}`, 'GET', null)
        let orders = res.data
        console.log(orders)
        dispatch(actGetAllOrder(orders))
    }
}

export const actGetAllOrder = (orders) => {
    return {
        type: Types.GET_ALL_ORDER,
        orders
    }
}

export const actUpdateUserRequest = (newUserInfo) => {
    return async (dispatch) => {
        const res = await callApi('api/auth/update-user', 'PUT', newUserInfo)
        let oldUser = JSON.parse(localStorage.getItem('user'))
        let token = oldUser.accessToken
        let userUpdated = res.data
        userUpdated.accessToken = token
        dispatch(actUpdateUser(userUpdated))
    }
}

export const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USERPROFILE,
        user
    }
}



// export const actCreateAccount = () => {
//     return {
//         type: Types.CREATE_ACCOUNT
//     }
// }