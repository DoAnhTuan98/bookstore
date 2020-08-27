import { combineReducers } from 'redux'
import statusCartItem from './toggleCartitem'
import Form from './changeForm'
import products from './products'
import cart from './cart'
const appReducers = combineReducers({
    statusCartItem,
    Form,
    products,
    cart
})

export default appReducers;