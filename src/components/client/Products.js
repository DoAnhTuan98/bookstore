import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import Product from './Product'
import LoadMore from './LoadMore'
// import '../../css/client/Products.css'
class Products extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <Col lg="9" xl="10">
                <div className="products">
                    <div className="h-100 container">
                        <Row>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </Row>
                        <Row>
                            <LoadMore />
                        </Row>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Products