import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={ Login } path="/" />
        <Route exact component={ Wallet } path="/carteira" />
      </Switch>
    </div>
  );
}

export default App;
