import React, { Component } from 'react'
import Header from '../../components/client/Header'
import Cart from '../../components/client/Cart'
import CartItem from '../../components/client/CartItem'
import Main from '../../components/client/Main'
import { connect } from 'react-redux'
import Product from '../../components/client/Product'
import { actFilterCategory, actGetAllProduct, actGetOneProduct, actAddToCart, actDecreaseCart } from '../../actions/index'
class Home extends Component {
    showProducts = (products) => {
        let result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} onGetOneProduct={this.props.onGetOneProduct} />
            })
        }
        return result
    }

    componentDidMount() {
        this.props.onGetAllProduct()
    }

    render() {
        let { products, cart, onAddToCart, onDecreaseCart } = this.props
        return (
            <div>
                <Header />
                <Cart cart={cart} />
                <CartItem cart={cart} onDecreaseCart={onDecreaseCart} onAddToCart={onAddToCart} />
                <Main showProducts={this.showProducts} products={products} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterProducts: (category) => {
            dispatch(actFilterCategory(category))
        },
        onGetAllProduct: () => {
            dispatch(actGetAllProduct())
        },
        onGetOneProduct: (id) => {
            dispatch(actGetOneProduct(id))
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        },
        onDecreaseCart: (product) => {
            dispatch(actDecreaseCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)