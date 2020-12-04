import React from 'react';
import Navbar from './Navbar';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import { currentUser } from '../actions/auth'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  componentDidMount(){
    const token = localStorage.getItem('my_app_token')

    if (!token) {
      this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      fetch('http://localhost:5000/api/v1/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => {
        this.props.currentUser(data)
      })
    }
  }

  render(){
    return (
        <div className="App">
          <Navbar icon="paint brush" title="Painterest" description="out app" />
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
    );
  }
};

export default connect(null, { currentUser })(withRouter(App))

