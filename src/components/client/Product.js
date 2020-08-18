import React, { Component } from 'react'
import { Col } from 'reactstrap'
import '../../css/client/Product.css'
class Product extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <Col className="mb-5" sm="6" lg="4" xl="3">
                <a className="product">
                    <img src="https://res.cloudinary.com/dofqucuyy/image/upload/v1596887706/firewatch-5120x2880-4k-8k-art-forest-13610_yy7fad.jpg" />
                    <div className="info">
                        <h3 className="title">The Princeton Childrens Book test</h3>
                        <p className="author">By Anh Tuan</p>
                    </div>
                </a>
            </Col>
        )
    }
}

export default Product