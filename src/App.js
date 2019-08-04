import React from 'react';

import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='#'>Jsebasf Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
