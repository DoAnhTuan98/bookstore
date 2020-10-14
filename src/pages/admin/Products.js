import React, { Component } from 'react'
import Header from '../../components/admin/Header'
import Nav from '../../components/admin/NavAdmin'
import Main from '../../components/admin/Main'
import Product from '../../components/client/Product'
import ProductFunc from '../../components/admin/ProductFunc'
import { connect } from 'react-redux'
import {
    actGetAllProductRequest,
    actFilterProductsAdminRequest,
    actFindProductRequest,
    actFilterProductByNameAdminRequest,
    actToggleFormProduct,
    actGetProductUpdate,
    actResetProductUpdate
} from '../../actions/index'
import { Redirect } from 'react-router-dom'

class Products extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            currentPage: 1,
            perPage: 8
        }
    }

    componentDidMount() {
        this.props.onGetAllProduct()
    }

    showProducts = (products) => {
        let result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    type="admin"
                    onOpenFormProduct={this.props.onOpenFormProduct}
                    onGetProductUpdate={this.props.onGetProductUpdate}
                />
            })
        }
        return result
    }

    paginate = (number) => {
        this.setState({
            currentPage: number
        })
    }

    render() {
        let adminToken = localStorage.getItem('adminToken')
        if (!adminToken) {
            return <Redirect to="/admin/login" />
        }
        let { currentPage, perPage } = this.state
        let {
            products,
            onFilterProducts,
            onFindProduct,
            onFilterProductsByName,
            onOpenFormProduct,
            isOpenFormProduct,
            onCloseFormProduct,
            productEditing,
            onResetProductUpdate
        } = this.props
        const indexOfLastProduct = currentPage * perPage
        const indexOfFirstProduct = indexOfLastProduct - perPage
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
        return (
            <React.Fragment>
                <Header onOpenFormProduct={onOpenFormProduct} />
                <Nav match={this.props.match} />
                {isOpenFormProduct ?
                    <ProductFunc
                        isOpenFormProduct={isOpenFormProduct}
                        onCloseFormProduct={onCloseFormProduct}
                        productEditing={productEditing}
                        onResetProductUpdate={onResetProductUpdate}

                    /> : ''
                }

                <Main
                    showProducts={this.showProducts}
                    products={currentProducts}
                    perPage={perPage}
                    totalProducts={products.length}
                    paginate={this.paginate}
                    onFilterProducts={onFilterProducts}
                    onFindProduct={onFindProduct}
                    onFilterProductsByName={onFilterProductsByName}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        isOpenFormProduct: state.isOpenFormProduct,
        productEditing: state.productEditing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetAllProduct: () => {
            dispatch(actGetAllProductRequest())
        },
        onFilterProducts: (keyword, category, priceType) => {
            dispatch(actFilterProductsAdminRequest(keyword, category, priceType))
        },
        onFindProduct: (name) => {
            dispatch(actFindProductRequest(name))
        },
        onFilterProductsByName: (keyword) => {
            dispatch(actFilterProductByNameAdminRequest(keyword))
        },
        onOpenFormProduct: () => {
            dispatch(actToggleFormProduct())
        },
        onCloseFormProduct: () => {
            dispatch(actToggleFormProduct())
        },
        onGetProductUpdate: (product) => {
            dispatch(actGetProductUpdate(product))
        },
        onResetProductUpdate: () => {
            dispatch(actResetProductUpdate())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)