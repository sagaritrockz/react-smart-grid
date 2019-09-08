import React, { Component } from "react";
import Table from "./table/Table";

export default class Grid extends Component {
  render() {
    const { tableData } = this.props;
    return (
      <div>
        <div className="table-label">
          <h2>Table Label</h2>
        </div>
        <Table tableData={tableData} />
      </div>
    );
  }
}
