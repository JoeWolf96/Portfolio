import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Homepage extends Component {
  render() {
    return (

      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="https://i.imgur.com/9MPSBkx.jpg"
                alt="prof pic"
              />
            </div>
            <div className="banner-text">
              <h1>Gioele Rossi</h1>
              <div className="title">
              <h2>Junior Software Engineer</h2>
              </div>
              <hr />
              <p>
                HTML | CSS | BOOTSTRAP | PYTHON | JAVASCRIPT | REACT |

              </p>
              <div className="social-links">


                {/* LinkedIn */}
                <a
                  href="https://github.com/JoeWolf96"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/gioele-lupo-rossi-2758a3210/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
