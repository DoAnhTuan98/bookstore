import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThLarge } from "@fortawesome/free-solid-svg-icons"
import '../../css/client/Category.css'

class Category extends Component {
    render() {
        let { onFilterProducts, paginate } = this.props
        return (
            <Col lg="3" xl="2">
                <div className="category">
                    <div className="logo">
                        <FontAwesomeIcon icon={faThLarge} className="mr-2" />
                        Select your Category
                    </div>
                    <ul>
                        <li onClick={(e) => { onFilterProducts('Children Literature'); paginate(1) }}>
                            <a>Children Literature</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Comic Book'); paginate(1) }}>
                            <a>Comic Book</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Fantasy'); paginate(1) }}>
                            <a>Fantasy</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Horror'); paginate(1) }}>
                            <a>Horror</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Novel'); paginate(1) }}>
                            <a>Novel</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Romantic'); paginate(1) }}>
                            <a>Romantic</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Science Fiction'); paginate(1) }}>
                            <a>Science Fiction</a>
                        </li>
                        <li onClick={() => { onFilterProducts('Thriller'); paginate(1) }}>
                            <a>Thriller</a>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}



export default Category