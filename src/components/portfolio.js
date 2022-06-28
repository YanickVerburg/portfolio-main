import React from "react";
import "../styles/style.css";
import jan3 from "../img/jan3.png";
import flyn from "../img/flyn.png";
import cap from "../img/cap.jpg";

export default class Portfolio extends React.Component {
  async componentDidMount() {
    document.title = "Portfolio - YV";

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
      <header style={{ height: "100%" }}>
        <div>
          <section id="portfolio-page">
            <div>
              <h3>Portfolio</h3>
              <input
                type="text"
                class="search-bar"
                placeholder="🔎︎ Search..."
              />
            </div>
            <div class="wrapper">
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project">
                    <img src={jan3} alt="" className="vervelend" />
                  </a>
                </div>
                <p>Jan's Kapsalon</p>
                <p>31-01-2022</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project2">
                    <img src={flyn} alt="" className="vervelend" />
                  </a>
                </div>
                <p>Fly-n</p>
                <p>29-6-2022</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src={cap} alt="" className="vervelend" />
                  </a>
                </div>
                <p>Project 3</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 4</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 5</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 6</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 7</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 8</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 9</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 10</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 11</p>
                <p>TBD</p>
              </div>
              <div class="box fade-in">
                <div class="nested">
                  <a href="/project3">
                    <img src="https://picsum.photos/200/200" alt="" />
                  </a>
                </div>
                <p>Project 12</p>
                <p>TBD</p>
              </div>
            </div>
          </section>
        </div>
      </header>
    );
  }
}
