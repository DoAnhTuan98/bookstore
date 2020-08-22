import { combineReducers } from 'redux'
import statusCartItem from './toggleCartitem'
import Form from './changeForm'
import isShow from './changeDescription'
const appReducers = combineReducers({
    statusCartItem,
    Form,
    isShow
})

export default appReducers;