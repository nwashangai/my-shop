import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

// components
import Navbar from 'components/NavBar';
import Routes from './routes';

class App extends Component {
  state = {
    itemCount: 0,
  };

  showCart = () => {
    // open user cart here
  };

  render() {
    return (
      <>
        <Navbar name="John" badge={this.state.itemCount} handleCart={this.showCart} />
        <Routes />
      </>
    );
  }
}

export default App;
