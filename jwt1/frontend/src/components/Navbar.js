import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth'

class Navbar extends React.Component {
  render() {
    return (
      <div className={`ui inverted yellow menu`}>
        <Link to='/dashboard' className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <div className="item">
      {
        this.props.auth ?
        <Link to='/login' className="ui button" onClick={this.props.logoutUser}>
          Logout
        </Link>
        :
        <Link to='/login' className="ui button">
          Login
        </Link>
      }
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, { logoutUser })(Navbar)





