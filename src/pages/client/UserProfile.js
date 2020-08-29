import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import UserSideBar from '../../components/client/UserSideBar'
import Nav from '../../components/client/Nav'
import '../../css/client/UserProfile.css'
import { connect } from 'react-redux'
class Userprofle extends Component {
    render() {
        let { user } = this.props
        return (
            <React.Fragment>
                <Nav />
                <div className="UserProfile user-container">
                    {/* <Alert option="edit" isOpen={isSave} /> */}
                    <div>
                        <UserSideBar page="profile" />
                    </div>
                    <div className="profile">
                        <div className="header">
                            <h1>Your Profile</h1>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label for="name">
                                    Name
                            <span className="ml-1 text-danger">*</span>
                                </Label>
                                <Input id="name" type="text" name="name" autoComplete="off" value={user.name} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">
                                    Email
                            <span className="ml-1 text-danger">*</span>
                                </Label>
                                <Input id="email" type="email" name="email" autoComplete="off" value={user.email} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">
                                    Password
                            <span className="ml-1 text-danger">*</span>
                                </Label>
                                <Input id="password" type="text" name="password" autoComplete="off" value={user.password} />
                                {/* {errors.password && <div className="validation">{errors.password}</div>} */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="address">
                                    Address
                            <span className="ml-1 text-danger">*</span>
                                </Label>
                                <Input id="address" type="text" name="address" autoComplete="off" value={user.address} />
                                {/* {errors.address && <div className="validation">{errors.address}</div>} */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">
                                    Phone
                            <span className="ml-1 text-danger">*</span>
                                </Label>
                                <Input autoComplete="off" id="phone" type="text" name="phone" value={user.phone} />
                                {/* {errors.phone && <div className="validation">{errors.phone}</div>} */}
                            </FormGroup>
                            <Button size="lg" block type="submit">
                                Save
                            </Button>
                        </Form>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Userprofle)