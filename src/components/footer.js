import React from "react";
import "../styles/style.css";

export default class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <div className="footer">
          <div>
            <p>&copy; Copyright 2022</p>
          </div>
          <div>
            <a href="https://github.com/YanickVerburg">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/yanick-verburg-9b0aa9221/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
