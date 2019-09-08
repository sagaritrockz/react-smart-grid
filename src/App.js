import React, { Component } from "react";

import Grid from "./components/Grid";
import tableData from "./Data";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: tableData
    };
  }

  render() {
    const { tableData } = this.state;
    return (
      <div id="smart-grid" className="App">
        <div className="App-header">
          <h1>React Smart Grid</h1>
        </div>
        <Grid tableData={tableData} />
      </div>
    );
  }
}
