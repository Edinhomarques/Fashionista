import React, { useState } from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Routes from './Routes/Routes';
import Drawer from './Containers/Drawer/Drawer'

function App() {
  const [showDrawer, setShowDrawer] = useState(false)
  function isVisible(){
    setShowDrawer(!showDrawer)

  }
  return (
    <div className="App">
      <Topbar isVisible={isVisible}/>
      <Drawer isVisible={isVisible} showDrawer={showDrawer} />
      <Routes />
    </div>
  );
}

export default App;
