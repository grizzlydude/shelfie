import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Product
                    name = {this.props.inventory.name}
                    price = {this.props.inventory.price}
                    image = {this.props.inventory.image} />
            </div>
        )
    }
}