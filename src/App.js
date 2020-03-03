// mad-libs-starter - code in React
// original file: cyoa-inputs.js (from JD)
// -rolf

import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    content: (getData, setData) => (
      <p>
        Let's play a game!
        <br />
        But first, what is your name?
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Get Started", page: "welcome" }]
  },
  welcome: {
    content: (getData, setData) => <p>Welcome {getData("name")}!</p>,
    buttons: [{ label: "Next", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  getData(dataName) {
    return this.state[dataName];
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.getData(dataName),
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
