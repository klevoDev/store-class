import React from 'react';

import {ShopItemClassComponent} from "./components/shop-item-class-component";

import './App.css';

function App() {
  return (

      <div className="App">
        <div className="container">
          <div className="background-element">
          </div>
          <div className="highlight-window">
            <div className='highlight-overlay'></div>
          </div>
          <div className="window">
            <ShopItemClassComponent />
          </div>
        </div>
      </div>

  );
}

export default App;
