import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import Category from './Category'
import Products from './Products'
class Main extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        let { products } = this.props
        return (
            <main className="main">
                <Container fluid={true}>
                    <Row>
                        {/* category  */}
                        <Category />
                        {/* Products  */}
                        <Products products={products}>
                            {this.props.showProducts}
                        </Products>
                    </Row>
                </Container>
            </main>
        )
    }
}

export default Main