import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} />
                <div className="productInfo">
                    <h2>
                        {this.props.name}
                    </h2>
                    <h3>
                        {this.props.price}
                    </h3>
                </div>
            </div>
        )
    }
}