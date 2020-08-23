import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
class CartBtn extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        let { type } = this.props
        return (
            <div className="cart-btn">
                <button className={type === 'related' ? 'btn related' : 'btn'}>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    {
                        type === 'related' ? <p>Cart</p> : <p>Add to cart</p>
                    }
                </button>
            </div>
        )
    }
}

export default CartBtn