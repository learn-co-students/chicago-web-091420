
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom'


// BrowserRouter => Wrap our entire app in this component in order for ReactRouterDom to watch for changes an update 
//                  accordingly
// Link/NavLink => Component used to update the url to whatever the "to" prop indicates
// Route => allows you to conditionally render a component if the path matches the url
// Switch => allows you to nest multiple routes within it and renders the first route that matches



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

