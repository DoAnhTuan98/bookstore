import React, { Component } from 'react'
import Header from '../../components/client/Header'
import Cart from '../../components/client/Cart'
import CartItem from '../../components/client/CartItem'
import Main from '../../components/client/Main'
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cart />
                <CartItem />
                <Main />
            </div>
        )
    }
}

export default Home