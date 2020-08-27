import React, { Component } from 'react'
import { Col } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThLarge } from "@fortawesome/free-solid-svg-icons"
import '../../css/client/Category.css'
import { connect } from 'react-redux'
import { actFilterCategory } from '../../actions/index'
import { Link } from 'react-router-dom'
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
                        <li onClick={() => this.props.onFilterProducts('Children Literature')}>
                            <a>Children Literature</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Comic Book')}>
                            <a>Comic Book</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Fantasy')}>
                            <a>Fantasy</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Horror')}>
                            <a>Horror</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Novel')}>
                            <a>Novel</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Romantic')}>
                            <a>Romantic</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Science Fiction')}>
                            <a>Science Fiction</a>
                        </li>
                        <li onClick={() => this.props.onFilterProducts('Thriller')}>
                            <a>Thriller</a>
                        </li>
                    </ul>
                </div>
            </Col>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterProducts: (category) => {
            dispatch(actFilterCategory(category))
        }
    }
}

export default connect(null, mapDispatchToProps)(Category)