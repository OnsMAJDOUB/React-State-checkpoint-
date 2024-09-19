import React, { Component } from "react";
import "./App.css"; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Ons MAJDOUB",
        bio: "A software developer with a passion for creating impactful solutions.",
        imgSrc:
          "https://lh3.googleusercontent.com/a/ACg8ocJskmn-7ZDSiD-rd2SGHwIMRZIPECzooA_Px0n5U4uvBFpGLQVmEA=s360-c-no",
        profession: "Software Developer",
      },
      shows: false,
      mountedTime: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <h1 className="header">Profile Viewer</h1>
        <button className="toggle-btn" onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile-card">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="profile-img"
            />
            <h2 className="profile-name">{person.fullName}</h2>
            <p className="profile-bio">{person.bio}</p>
            <h3 className="profile-profession">{person.profession}</h3>
          </div>
        )}

        <p className="timer">Component mounted {mountedTime} seconds ago.</p>
      </div>
    );
  }
}

export default App;
