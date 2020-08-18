import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../../css/client/Banner.css'
class Banner extends Component {

    render() {
        return (
            <div className="Banner">
                <Container>
                    <div className="title">
                        <h1>Your own books store</h1>
                        <p>Get your favourite books from our wide range of books.</p>
                    </div>
                    <div className="search-bar">
                        <span class="label">Book</span>
                        <form>
                            <input className="p-0" type="text" placeholder="Search your books from here" />
                        </form>
                        <Button>
                            <FontAwesomeIcon icon={faSearch} className="mr-2" />
                                    Search
                                </Button>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Banner