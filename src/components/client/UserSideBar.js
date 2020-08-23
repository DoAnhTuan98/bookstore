import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/client/UserSideBar.css'
class UserSideBar extends Component {
    constructor(pros) {
        super(pros)

    }
    render() {
        return (
            <div className="user-side-bar d-none d-xl-block">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="#">
                            Your order
                        </Link>
                    </li>
                    <li className="nav-item mb-5">
                        <Link to="#">
                            Checkout
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            Your Account Settings
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserSideBar