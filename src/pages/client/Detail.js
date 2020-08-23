import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import Cart from '../../components/client/Cart'
import CartItem from '../../components/client/CartItem'
import ProductView from '../../components/client/ProductView'
import RelateItems from '../../components/client/RelateItems'
class Detail extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Cart />
                <CartItem />
                <ProductView />
                <RelateItems />
            </div>
        )
    }
}

export default Detail