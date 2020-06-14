import React, { useState } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Routes from './Routes/Routes';
import Drawer from './Containers/Drawer/Drawer'
import Cart from './Containers/Cart/Cart'
function App(props) {
  const [showDrawer, setShowDrawer] = useState(false)
  function isVisible(){
    setShowDrawer(!showDrawer)
  }
  const items = JSON.parse(localStorage.getItem('cart'))
  return (
    <div className="App">
      <Topbar isVisible={isVisible}/>
      <Drawer isVisible={isVisible} showDrawer={showDrawer} item={items}>
        <Cart items={items}/>
      </Drawer>
      <Routes />
    </div>
  );
}

export default App;
