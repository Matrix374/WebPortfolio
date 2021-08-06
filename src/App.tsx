import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Profile-header">
          <div className="Profile-pic-container">
            <img src={logo} className="Profile-pic" />
          </div>
          <div className="Profile-body-container">
            <h1>Irfan Hanafi</h1>
            <p>Software Developer</p>
            <p>Graduated 1st Class - Manchester Metropolitan University</p>
          </div>
        </div>
        
        <div className="Shortcuts">
          <h2>Shortcuts</h2>
          <ul>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
          </ul>
        </div>

        <div className="Body">
          <p>Web Portfolio created with Typescript, React and AWS</p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* These body sections can be React Components */}
          <div className="AboutMe">
            <h1>About Me</h1>
          </div>
          <div className="Experience">
            <h1>Experience</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
