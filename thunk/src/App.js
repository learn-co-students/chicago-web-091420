
import React from 'react';
import Navbar from './components/Navbar';
import UsersContainer from './UsersContainer';
import About from './components/About';
import PaintingList from './components/PaintingList';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Switch>
        <Route component={About} path='/about' />
        <Route component={PaintingList} path='/paintings'  />
      </Switch>
    </div>
  );
};

export default App;


















