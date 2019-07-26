import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      inventoryIndex: 0
    }
  }

  getInventory() {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {

    return (
      <div className="App">
        <div>{this.state.inventory}</div>
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
