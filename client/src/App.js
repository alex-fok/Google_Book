import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './pages/Search';
import Saved from './pages/Saved';

import Navigator from './components/Navigator';

function App() {
  return (
    <Router>
      <Navigator />
      <Switch>
        <Route exact path='/' component={Search} />
        <Route exact path='/saved' component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
