import { combineReducers } from 'redux'
import statusCartItem from './toggleCartitem'
import Form from './changeForm'
import products from './products'
import cart from './cart'
import statusProfileForm from './toggleProfileForm'
import user from './user'
const appReducers = combineReducers({
    statusCartItem,
    Form,
    products,
    cart,
    statusProfileForm,
    user
})

export default appReducers;