// mad-libs-demo - mad lib game in React
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
      </p>
    ),
    buttons: [{ label: "Get Started", page: "get1" }]
  },
  get1: {
    content: (getData, setData) => (
      <p>
        I need an exclamation:
        <br />
        <input
          type="text"
          value={getData("exclamation")}
          onChange={event => setData("exclamation", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Next", page: "get2" }]
  },
  get2: {
    content: (getData, setData) => (
      <p>
        I need an adverb:
        <br />
        <input
          type="text"
          value={getData("adverb")}
          onChange={event => setData("adverb", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Next", page: "get3" }]
  },
  get3: {
    content: (getData, setData) => (
      <p>
        I need a noun:
        <br />
        <input
          type="text"
          value={getData("noun")}
          onChange={event => setData("noun", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Next", page: "get4" }]
  },
  get4: {
    content: (getData, setData) => (
      <p>
        I need an adjective:
        <br />
        <input
          type="text"
          value={getData("adjective")}
          onChange={event => setData("adjective", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Next", page: "final" }]
  },
  final: {
    content: (getData, setData) => (
      <p>
        {getData("exclamation")}! he said {getData("adverb")} as he jumped into
        his convertible {getData("noun")} and drove off with his{" "}
        {getData("adjective")} wife.
      </p>
    ),
    buttons: [{ label: "Start Over", page: "start" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start",
      name: "",
      exclamation: "",
      adverb: "",
      noun: "",
      adjective: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
    if (pageName === "start") {
      this.setState({
        exclamation: "",
        adverb: "",
        noun: "",
        adjective: ""
      });
    }
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
