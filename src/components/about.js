import React from "react";
import "../styles/style.css";
import pfp from "../img/pfp.jpg";

export default class About extends React.Component {
  componentDidMount() {
    document.title = "About - YV";
  }
  render() {
    return (
      <header style={{ height: "100%" }}>
        <section id="about-page">
          <h3>About Me</h3>
          <div className="wrapper2">
            <div>
              <div className="box-icon">
                <img className="about-img" src={pfp} />
                <p>Yanick Verburg</p>
              </div>
              <p className="about-text">
                Ik ben Yanick, 18 jaar oud, en ben dit jaar begonnen met de
                opleiding Open-ICT aan Hogeschool Utrecht. Mijn voorkeur gaat
                uit naar de front-end en business, en ik hoop daar nog veel over
                te leren de aankomende paar jaren.
              </p>
              <div className="container c1">
                <p>HTML -</p>
                <i className="fab fa-html5"></i>
                <p className="invis1">100%</p>
                <div className="Loading Loading-1"></div>
              </div>
              <div className="container c2">
                <p>CSS -</p>
                <i className="fab fa-css3-alt"></i>
                <p className="invis2">80%</p>
                <div className="Loading Loading-2"></div>
              </div>
              <div className="container c3">
                <p>React -</p>
                <i className="fab fa-react"></i>
                <p className="invis3">65%</p>
                <div className="Loading Loading-3"></div>
              </div>
              <div>
                <p>Other skills</p>
                <i class="fab fa-php skills-icon"></i>
                <i class="fas fa-database skills-icon"></i>
                <i className="fab fa-github skills-icon"></i>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
