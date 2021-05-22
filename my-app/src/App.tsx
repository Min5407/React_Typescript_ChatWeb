import React from 'react';
import { Routes } from './Routes';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Auth} />
    </Switch>
  );
}

export default App;
