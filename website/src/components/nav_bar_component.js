import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './nav_bar_component.css';

class NavBar extends React.Component {
  render() {
    return ( 
    <Router>
      <div>
        <ul className="navbar">
            <li className="navlink" id="active"><Link to="/">Home</Link></li>
            <li className="navlink"><Link to="/projects">Projects</Link></li>
            <li className="navlink"><Link to="/resume">Resume</Link></li>
        </ul>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}
function Home() {
  return <h2>Home</h2>;
}

function Projects() {
  return <h2>Projects</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}

export default NavBar;