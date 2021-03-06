import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <h1>This is a React Component</h1>
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/learn">Learn More</NavLink>
        </NavItem>
      </Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/learn" component={LearnMore} />
      </Switch>
    </Router>
  );
};

export default App;
