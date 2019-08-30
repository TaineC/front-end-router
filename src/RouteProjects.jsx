import React, {Component} from 'react';
import Project from './Project';
import {getProjects} from './API';

class RouteProjects extends Component {
  constructor(props){
    super(props)
    this.state = {
      projects:[],
    }
  }

  //to get projects from api -- loading (getProjects)
  // routeLoadProjects = () => {
  //   getProjects().then(res => {
  //     this.setState({projects: res.data})
  //   })
  // }

  routeGetProjects = () => {
    getProjects().then(res => {
      this.setState({projects: res.data})
    })
  }

  componentDidMount(){
    this.routeGetProjects();
  }

  render(){

	    return (
        <div className="main">
          <h3>All Projects</h3>
          {
          this.state.projects.map((item) => {

            var projectProps = {
              ...item,
              key: item.id,
              refreshData: this.routeGetProjects,
            };
            return (<Project {...projectProps} />)
          })
        }
        </div>
	      
          
          
        );
        
      }
    }

export default RouteProjects;
