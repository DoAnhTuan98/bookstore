import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/Category.css'
class Category extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <Col lg="3" xl="2">
                <div className="category">
                    <div className="logo">
                        <FontAwesomeIcon icon={faThLarge} className="mr-2" />
                                        Select your Category
                                    </div>
                    <ul>
                        <li>
                            <a href="#">Children Literature</a>
                        </li>
                        <li>
                            <a href="#">Comic Book</a>
                        </li>
                        <li>
                            <a href="#">Fantasy</a>
                        </li>
                        <li>
                            <a href="#">Horror</a>
                        </li>
                        <li>
                            <a href="#">Novel</a>
                        </li>
                        <li>
                            <a href="#">Romantic</a>
                        </li>
                        <li>
                            <a href="#">Science Fiction</a>
                        </li>
                        <li>
                            <a href="#">Thriller</a>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}

export default Category