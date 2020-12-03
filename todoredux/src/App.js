import logo from './logo.svg';
import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchTodosSuccess } from './actions/index'
import TodosContainer from './components/TodosContainer'
import Form from './components/Form'

class App extends React.Component {
  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(todos=> {
      this.props.fetchTodosSuccess(todos)
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Form />
        <TodosContainer />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchTodosSuccess: fetchTodosSuccess
}

export default connect(null, mapDispatchToProps)(App)
