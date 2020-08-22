import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/ProductView.css'
import { Link } from 'react-router-dom'
import CartBtn from '../../components/client/CartBtn'
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
        return (
            <div className="ProductView py-5">
                <Container fluid="lg">
                    <Row>
                        <Col xl="6" lg="6" className="mb-5 text-center img">
                            <button className="btn back-btn">
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                                Back
                            </button>
                            <div className="img-wrapper">
                                <img src="https://res.cloudinary.com/dofqucuyy/image/upload/v1596887706/firewatch-5120x2880-4k-8k-art-forest-13610_yy7fad.jpg" alt="" />
                            </div>
                        </Col>
                        <Col xl="6" lg="6">
                            <div className="title">
                                <h1>The Princeton Childrens Book test</h1>
                                <p>By Anh Tuan</p>
                            </div>
                            <div className="description">
                                <p className={this.state.isShow === true ? "des-show" : ''}>
                                    tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis
                                </p>
                                {
                                    this.state.isShow === false ? <div className="read-more" onClick={this.setShow}>Read more</div> : <div className="read-more" onClick={this.setShow}>Less</div>

                                }
                            </div>
                            <div className="price">
                                $70
                            </div>
                            <CartBtn />
                            <div className="category-product">
                                <Link to="/" className="btn">
                                    Children Literature
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