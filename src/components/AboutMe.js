import React from "react";
import "babel-polyfill";
import Header from "./Header";
import NavCard from "./NavCard";

import { Fade } from "react-reveal";

class AboutMe extends React.Component {
  state = {};

  handleRoute = route => {
    this.props.history.push(`/${route}/`);
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Header title="About Me" icon="md-person" />
        <NavCard handleRoute={this.handleRoute} />
        <Fade>
          <div className="about-me">
            <div className="about-me-headshot-container">
              <img
                className="about-me-headshot"
                alt="did not load"
                src="../images/ChrisW321.jpg"
              />
            </div>
            <div className="about-description">
              <p className="about-description-text">
                I'm a full-stack software engineer who enjoys building scalable,
                responsive, beautifully designed web applications.
              </p>
              <p className="about-description-text">
                When I’m not on the job, I enjoy traveling the world and staying active.
              </p>
              <p className="about-description-text">
                I earned a B.S. in Environmental Economics and Policy from the University
                of California, Berkeley. I have experience working with: React.js,
                JavaScript, Redux, D3.js, CSS3, HTML5, JQuery, Ruby on Rails,
                Node.js, AWS (S3, SNS, SES), AJAX/AXIOS, PostgreSQL, Python, Express.js
                REST APIs, Single-Page Applications, Heroku, RSpec, Git and Github,
                TDD, and OOP principles.
              </p>
            </div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default AboutMe;
