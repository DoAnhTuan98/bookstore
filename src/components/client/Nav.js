import React, { Component } from 'react'
import { Button } from 'reactstrap'
import '../../css/client/Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className="Nav">
                <div className="logo">
                    <img alt="" src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg" />
                </div>
                <div className="user-btn">
                    <Button className="auth-btn">Sign in</Button>
                </div>
            </div>
        )
    }
}

export default Nav