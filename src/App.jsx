import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:username" component={User} />
      </Switch>
    </div>
  );
};

export default App;
