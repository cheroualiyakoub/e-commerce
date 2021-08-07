import React from 'react';
import {Switch, Route} from 'react-router-dom'


import HomePage from './pages/homepage/Homepage.component.jsx';

import './App.css';

const HatsPage  = ()=> ( 
  <div>
    <h1>Hats Page</h1>
  </div>
);

const Jackets  = ()=> ( 
  <div>
    <h1>Jackets Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch> 
        <Route exact path='/' component = {HomePage}/>
        <Route  path='/shop/jackets' component = {Jackets}/>
      </Switch> 
    </div>
  );
}

export default App;
