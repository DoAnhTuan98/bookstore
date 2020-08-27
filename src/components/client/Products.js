import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import LoadMore from './LoadMore'
class Products extends Component {
    render() {
        let { products } = this.props
        return (
            <Col lg="9" xl="10">
                <div className="products">
                    <div className="h-100 container">
                        <Row>
                            {this.props.children(products)}
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