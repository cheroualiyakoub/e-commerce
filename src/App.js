import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'

;import HomePage from './pages/homepage/Homepage.component.jsx';
import Header from './components/header/header.component';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch> 
        <Route exact path='/' component = {HomePage}/>
        <Route  exact path='/shop' component = {ShopPage}/>
      </Switch> 
    </div>
  );
}

export default App;
