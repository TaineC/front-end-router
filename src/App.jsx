import React, {Component} from 'react';
import { Router, Link } from "@reach/router";
import RouteProjects from './RouteProjects';
import RouteAddProject from './RouteAddProject';
import RouteEditProject from './RouteEditProject';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="app">


          <div className="header">
            <span>Welcome Peter</span> <i className="fas fa-bars"></i>
            <ul className="menu">
              <Link to="projects">All Projects</Link>
              <Link to="projects/create">Add A Projects</Link>
              <li><a href="">Login</a></li>
              <li><a href="">Signup</a></li>
            </ul>
          </div>

          <Router>
            <RouteProjects path="projects"/>
            <RouteAddProject path="projects/create"/>
            <RouteEditProject path="projects/:id/edit"/>
          </Router>

        
      </div>
    );
  }
}

export default App;
