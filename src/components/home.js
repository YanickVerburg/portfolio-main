import React from "react";
import "../styles/style.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import jan3 from "../img/jan3.png";
import flyn from "../img/flyn.png";
import cap from "../img/cap.jpg";

export default class Home extends React.Component {
  async componentDidMount() {
    document.title = "Home - YV";

    // ANIMATION FADE-IN
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 1,
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }

  render() {
    return (
      <>
        <section id="home-page">
          <div className="header">
            <h1>Yanick Verburg</h1>
            <p>Open-ICT, Hogeschool Utrecht</p>
            <button className="btn">
              <a href="#projects-page">
                <a href="#projects-wrapper" class="home-anchor">
                  Projects
                  <i className="fas fa-arrow-alt-circle-down"></i>
                </a>
              </a>
            </button>
          </div>
        </section>
        <div>
          <section id="projects-page">
            <h3 className="fade-in">Projects</h3>
            <div className="wrapper" id="projects-wrapper">
              <div className="box fade-in">
                <div className="nested">
                  <a href="/project">
                    <img src={jan3} alt="" className="vervelend" />
                  </a>
                </div>
                <p>Jan's Kapsalon</p>
                <p>31-01-2022</p>
              </div>
              <div className="box fade-in">
                <div className="nested">
                  <a href="/project2">
                    <img src={flyn} alt="" className="vervelend" />
                  </a>
                </div>
                <p>Fly-n</p>
                <p>29-06-2022</p>
              </div>
              <div className="box fade-in">
                <div className="nested">
                  <a href="/project3">
                    <img src={cap} alt="" className="vervelend" />
                  </a>
                </div>
                <p>Capgemini</p>
                <p>TBD</p>
              </div>
              <div className="box fade-in">
                <div className="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 4</p>
                <p>TBD</p>
              </div>
              <div className="box fade-in">
                <div className="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 5</p>
                <p>TBD</p>
              </div>
              <div className="box fade-in">
                <div className="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 6</p>
                <p>TBD</p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
