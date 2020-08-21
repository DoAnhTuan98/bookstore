import React, { Component } from 'react'
import { Button, Modal } from 'reactstrap'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../../css/client/Nav.css'
import { connect } from 'react-redux'
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
        }
    }

    toggle = () => {
        let modal = this.state.modal
        this.setState({
            modal: !modal
        })
    }

    render() {
        const externalCloseBtn = <button className="auth close" style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: '#fff', width: '32px', height: '32px', color: 'rgb(34, 34, 34)', borderRadius: '50%', opacity: '1' }} onClick={this.toggle}>&times;</button>;
        return (
            <div className="Nav">
                <div className="logo">
                    <img alt="" src="https://res.cloudinary.com/dofqucuyy/image/upload/v1585755124/Books/logo_gtuxyy.svg" />
                </div>
                <div className="user-btn">
                    <Button className="auth-btn" onClick={this.toggle}>Sign in</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-dialog-centered" external={externalCloseBtn}>
                        <SignIn />
                    </Modal>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // openFormSignIn : 
//     }
// }

export default Nav