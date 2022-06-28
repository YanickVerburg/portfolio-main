import React from "react";
import "../styles/project-style.css";

export default class Project extends React.Component {
  async componentDidMount() {
    document.title = "Project - YV";
    document.getElementById("footer").style.display = "none";
  }

  render() {
    return (
      <header style={{ height: "100%" }}>
        <h3>Coming soon</h3>
      </header>
    );
  }
}
