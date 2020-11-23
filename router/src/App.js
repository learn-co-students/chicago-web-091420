
import React from 'react';
import Navbar from './Navbar';
import UsersContainer from './UsersContainer';
import About from './About';
import Dashboard from './Dashboard';
import Paintings from './Paintings';
import Login from './Login';
import { Route, Switch } from 'react-router-dom'
import Component404 from './404Component';

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Switch>
        <Route component={About} path='/about' />
        <Route component={Login} path='/login' />
        <Route component={Dashboard} path='/dashboard/:username/' />
        <Route component={Paintings} path='/paintings'  />


        <Route component={Component404} path='*' />
      </Switch>
    </div>
  );
};

export default App;


















