import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/menu';

import { DISHES } from './shared/dishes';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='#'>JSEBASF Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
