import React, { Component } from 'react';

import './Home.scss';

// components
import SideBar from '../../components/SideBar';
import Card from '../../components/Card';

class Home extends Component {
  state = {
    filters: {
      selectedColor: '',
      selectedButton: '',
    },
  };

  filterOption = event => {
    const { value, id } = event.target;
    this.setState(prev => ({ ...prev, filters: { ...prev.filters, [id]: value } }));
  };

  render() {
    return (
      <div className="home-page">
        <Card classes="home-page__side-bar">
          <SideBar selectedOptions={this.state.filters} selectOption={this.filterOption} />
        </Card>
        <Card classes="home-page__main-content">None</Card>
      </div>
    );
  }
}

export default Home;
