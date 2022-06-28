import React from "react";
import "../styles/project-style.css";
import {
  IoLogoGooglePlaystore,
  DiReact,
  CgCPlusPlus,
  SiAdobexd,
  SiTestinglibrary,
} from "react-icons/all";
import flyn2 from "../img/flyn2.jpg";

export default class Project extends React.Component {
  async componentDidMount() {
    document.title = "Fly-n - YV";
    document.getElementById("footer").style.display = "none";
  }

  render() {
    return (
      <header style={{ height: "100%" }}>
        <div>
          <h3>Fly-n</h3>
          <section id="project">
            <div className="project-wrapper">
              <div className="img-div">
                <img src={flyn2} alt="" />
              </div>
              <div>
                <p>
                  Fly-n is een internationale reis app dat verschillende
                  vervoersaanbieders combineert voor een complete reis.
                  Gebruikers kunnen zo de goedkoopste, snelste en
                  milieuvriendelijkste reis vinden op één plek. Fly-n is te
                  downloaden in de PlayStore. Wat ik heb geleerd: een applicatie
                  ontwikkelen met React Native, legale business gedeelte, best
                  practices React, UX &amp; GitHub. Ik heb gewerkt aan de
                  front-end van de app.
                </p>
                <p className="date">Datum: 29-06-2022</p>
              </div>
              <div className="center">
                <a href="https://imgur.com/a/tyLJPoI">
                  <i className="fa fa-file-image-o git-icon"></i>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.leonvdw.flyn">
                  <i className="fa fa-download view-icon" />
                </a>
                <div className="skills">
                  <i>
                    <IoLogoGooglePlaystore class="fa fa-mobile" />
                  </i>
                  <i>
                    <DiReact class="fab fa-css3-alt" />
                  </i>
                  <i>
                    <CgCPlusPlus class="fab fa-php" />
                  </i>
                  <i>
                    <SiAdobexd class="fab fa-react" />
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
