import React, { Component } from 'react'
import Nav from '../../components/client/Nav'
import Cart from '../../components/client/Cart'
import CartItem from '../../components/client/CartItem'
import ProductView from '../../components/client/ProductView'
import RelateItems from '../../components/client/RelateItems'
import Product from '../../components/client/Product'
import { connect } from 'react-redux'
import { actGetAllProduct, actAddToCart } from '../../actions/index'
class Detail extends Component {
    showProduct = (products, id) => {
        let product = products.find(product => product.id === parseInt(id))
        let category = product.category
        let relateitems = products.filter(product => product.category === category)
        let result = null
        if (relateitems.length > 0) {
            result = relateitems.map((product, index) => {
                return <Product key={index} product={product} type="related" cart={this.props.cart} />
            })
        }
        return result
    }
    render() {
        let { products, onAddToCart, cart } = this.props
        console.log(cart)
        let { match } = this.props.match
        let id = match.params.id
        return (
            <div>
                <Nav />
                <Cart cart={cart} />
                <CartItem cart={cart} />
                <ProductView products={products} id={id} onAddToCart={onAddToCart} cart={cart} />
                <RelateItems showProduct={this.showProduct} products={products} id={parseInt(id)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllProducts: () => {
            dispatch(actGetAllProduct())
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)