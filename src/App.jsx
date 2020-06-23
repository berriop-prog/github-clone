import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import { MarkGithubIcon } from '@primer/octicons-react';

const App = () => {
  return (
    <div>
      <header className=" py-lg-0 flex-wrap">
        <MarkGithubIcon size={32} className="icon" />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:username" component={User} />
      </Switch>
    </div>
  );
};

export default App;
