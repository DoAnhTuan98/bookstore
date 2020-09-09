import React, { Component } from 'react'
import { Col } from 'reactstrap'
import '../../css/client/Product.css'
import CartBtn from './CartBtn'
import { Link } from 'react-router-dom'

class Product extends Component {

    render() {
        let { type, product, cart, onAddToCart, onCartBtnClick, onDecreaseCart } = this.props
        return (
            <Col className="mb-5" sm="6" lg="4" xl="3">
                <Link className="product" to={`/product/${product._id}`} >
                    <img src={product.img} />
                    <div className="info">
                        <h3 className="title">{product.name}</h3>
                        <p className="author">{product.author}</p>
                    </div>
                    {
                        (type === 'related' || type === 'admin') &&
                        <div className="cartbtn-price">
                            <div className="price">${product.price}</div>
                            {
                                type !== 'admin' &&
                                <CartBtn
                                    type={type}
                                    cart={cart}
                                    product={product}
                                    onAddToCart={onAddToCart}
                                    onCartBtnClick={onCartBtnClick}
                                    onDecreaseCart={onDecreaseCart} />
                            }
                        </div>
                    }
                </Link>
            </Col>
        )
    }
}

export default Product