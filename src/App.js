import React from 'react';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <div>HATS PAGE</div>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage}></Route>
        <Route exact={true} path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
