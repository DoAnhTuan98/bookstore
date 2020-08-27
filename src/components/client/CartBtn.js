import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import QuantityAdjustment from './QuantityAdjustment'
import { connect } from 'react-redux'
class CartBtn extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        let { type, onAddToCart, cart, product } = this.props
        console.log(product, cart)
        let cartCurrently = cart.find(element => element.product.id === product.id)

        // cart.forEach(element => {
        //     if(element.product.id === 
        // });
        // let isShowQuantity = product.id === cart.product.id
        // console.log(isShowQuantity)
        // console.log(product, cart)
        return (
            <div className="cart-btn">
                {
                    cartCurrently !== undefined ? <QuantityAdjustment cartCurrently={cartCurrently} product={product} /> :
                        <button className={type === 'related' ? 'btn related' : 'btn'} onClick={() => onAddToCart(product)}>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                            {
                                type === 'related' ? <p>Cart</p> : <p>Add to cart</p>
                            }
                        </button>
                }
                {/* <QuantityAdjustment /> */}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart
//     }
// }

// export default connect(mapStateToProps, null)(CartBtn)

export default CartBtn