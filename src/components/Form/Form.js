import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            shelf: [],
            name: '',
            price: 0,
            imgurl: '',
        }
    }

    handleItemName(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handlePrice(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleImageURL(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitInputs(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInputs() {
        this.setState({
            shelf: [],
            name: '',
            price: null,
            image_url: '',
        })
        console.log('you have clicked Cancel')
    }

    render() {
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input type='text'
                        placeholder='name of item'
                        name='name'
                        onChange={e => this.handleItemName(e)} />
                    <input type='text'
                        placeholder='price'
                        name='price'
                        onChange={e => this.handlePrice(e)} />
                    <input type='text'
                        placeholder='Image URL'
                        name='image'
                        onChange={e => this.handleImageURL(e)} />
                    <button onClick={() => this.submitInputs()}>Add to Inventory</button>
                    <button onClick={() => this.resetInputs()}>Cancel</button>
                </form>
            </div>
        )
    }
}
