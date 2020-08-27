import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/ProductView.css'
import '../../css/client/CartBtn.css'
import { Link } from 'react-router-dom'
import CartBtn from '../../components/client/CartBtn'
// import { connect } from 'react-redux'
// import { actGetAllProduct, actAddToCart } from '../../actions/index'
// import Product from './Product';
class ProductView extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            isShow: false
        }
    }
    setShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        let { products, id, onAddToCart, cart } = this.props
        let product = products.find(product => product.id === parseInt(id))
        return (
            <div className="ProductView py-5">
                <Container fluid="lg">
                    <Row>
                        <Col xl="6" lg="6" className="mb-5 text-center img">
                            <button className="btn back-btn">
                                <Link to="/" style={{ textDecoration: 'none', color: 'rgb(0, 158, 127)' }} >
                                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                    Back
                                </Link>
                            </button>
                            <div className="img-wrapper">
                                <img src={product.img} alt="" />
                            </div>
                        </Col>
                        <Col xl="6" lg="6">
                            <div className="title">
                                <h1>{product.name}</h1>
                                <p>{product.author}</p>
                            </div>
                            <div className="description">
                                <p className={this.state.isShow === true ? "des-show" : ''}>
                                    {product.des}
                                </p>
                                {
                                    this.state.isShow === false ? <div className="read-more" onClick={this.setShow}>Read more</div> : <div className="read-more" onClick={this.setShow}>Less</div>

                                }
                            </div>
                            <div className="price">
                                ${product.price}
                            </div>
                            <CartBtn onAddToCart={onAddToCart} product={product} cart={cart} />
                            <div className="category-product">
                                <Link to="/" className="btn">
                                    {product.category}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductView