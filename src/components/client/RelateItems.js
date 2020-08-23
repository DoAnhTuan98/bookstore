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
                <Container className="max-width">
                    <Row className="ml-2" >
                        <h1>Related Items</h1>
                    </Row>
                    <Row>
                        <Product type="related" />
                        <Product type="related" />
                        <Product type="related" />
                        <Product type="related" />
                        <Product type="related" />
                        <Product type="related" />
                        <Product type="related" />
                        <Product type="related" />
                    </Row>
                </Container>
            </div >
        )
    }
}

export default RelateItems