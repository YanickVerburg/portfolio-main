import React from "react";
import "../styles/project-style.css";
import jan from "../img/jan.png";
import { DiReact, SiAdobexd, SiTailwindcss, SiMysql } from "react-icons/all";

export default class Project extends React.Component {
  async componentDidMount() {
    document.title = "Jan's Kapsalon - YV";
    document.getElementById("footer").style.display = "none";
  }

  render() {
    return (
      <header style={{ height: "100%" }}>
        <div>
          <h3>Jan's Kapsalon</h3>
          <section id="project">
            <div className="project-wrapper">
              <div className="img-div">
                <img src={jan} alt="" />
              </div>
              <div>
                <p>
                  Het eerste project van Open-ICT. Het doel: een website voor
                  Jan's Kapsalon. Klanten kunnen hier een afspraak maken en
                  informatie vinden over de locatie en openingstijden. Voor de
                  werknemers was er een dashboard nodig met roosters. Wat ik heb
                  geleerd: te werk gaan met AdobeXD voor designs, het
                  TailwindCSS framework, MySQL databases en React. Ik heb
                  gewerkt aan de front-end van de website.
                </p>
                <p className="date">Datum: 31-01-2022</p>
              </div>
              <div className="center">
                <a href="https://imgur.com/a/s26VCwC">
                  <i className="fa fa-file-image-o git-icon"></i>
                </a>
                <a href="https://janskapsalon.nl/">
                  <i class="fa fa-external-link view-icon"></i>
                </a>
                <div className="skills">
                  <i>
                    <DiReact class="fab fa-css3-alt" />
                  </i>
                  <i>
                    <SiTailwindcss class="fab fa-css3-alt" />
                  </i>
                  <i>
                    <SiAdobexd class="fab fa-php" />
                  </i>
                  <i>
                    <SiMysql class="fab fa-react" />
                  </i>
                </div>
              </div>
              <div className="center">
                <a href="javascript:history.go(-1)">
                  <button type="button">
                    Go Back
                    <i className="far fa-arrow-alt-circle-left"></i>
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </header>
    );
  }
}
