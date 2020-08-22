import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Product from './Product'
import '../../css/client/RelateItems.css'
class RelateItems extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="relate-items">
                <Container>
                    <Row className="ml-2">
                        <h1>Related Items</h1>
                    </Row>
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
                </Container>
            </div >
        )
    }
}

export default RelateItems