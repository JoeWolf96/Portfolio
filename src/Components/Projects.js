import React, { Component } from "react";

import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };


  }

  render() {
    return (
      <h1>Projects go Here</h1>
    );
  }
}

export default Projects;
