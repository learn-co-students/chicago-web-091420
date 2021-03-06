
import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'


class Login extends React.Component {
  state = {
    username: 'raza',
    password: 'hello',
    error: null
  }

  handleInputChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:5000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.loginSuccess(data)
        this.props.history.push('/dashboard')
      }
    })

  }

    // send the formdata to the BE so the usser is  authenticate
    // once successful:
    //   - reset the form
    //   - redirect to the dashboard
    //   - update the redux store with the new user.
    
  render(){

    return (
      <div>
        {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginSuccess: loginSuccess
}

export default connect(null, mapDispatchToProps)(Login)











