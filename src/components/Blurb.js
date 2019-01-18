import React from "react";
import Code from "react-code-prettify";
class Blurb extends React.Component {
  state = {
    image1: "../images/Ted.jpg",
    image2: "../images/Ted.jpg",
    currentImageNumber: 1,
    currentImage: "../images/Ted.jpg"
  };

  updatePhoto() {
    let current = this.state.currentImageNumber;
    if (current === 1) {
      this.setState({ currentImage: this.state.image2 });
      this.setState({ currentImageNumber: 2 });
    } else {
      this.setState({ currentImage: this.state.image1 });
      this.setState({ currentImageNumber: 1 });
    }
  }

  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const codeString = `const Ted = () => {
      let aboutMe = {
        skills: ['JS', 'CSS', 'Git', 'React'],
        activities: ['Staying Active', 'creative coding']
      };
      for (let i = 0; i < this.aboutMe.skills.length; i += 1) {
        alert('Work harder and always keep learning!');
      }
      const objective = 'Find an amazing job';
      return objective ? 'Profit!' : 'FizzBuzz?!';
    };`;
    return (
      <div>
        <div
          className="about-headshot-container"
          onMouseEnter={() => this.updatePhoto()}
          onMouseLeave={() => this.updatePhoto()}
        >
          <img
            className="about-headshot"
            alt="did not load"
            src={this.state.currentImage}
          />

          <div className="about-blurb">
            <Code codeString={codeString} language="javascript" />
          </div>
        </div>
      </div>
    );
  }
}

export default Blurb;
