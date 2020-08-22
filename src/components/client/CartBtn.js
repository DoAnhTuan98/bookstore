import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
class CartBtn extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="cart-btn">
                <button className="btn">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <p>Add to cart</p>
                </button>
            </div>
        )
    }
}

export default CartBtn