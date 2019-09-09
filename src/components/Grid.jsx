import React, { Component } from "react";
import Table from "./table/Table";
import * as Utils from "../Utils";

export default class Grid extends Component {
  getTableHeaders = () => {
    const { tableData } = this.props;
    const { metaData, columns } = tableData;
    let headers = [];

    const metaDataObj = Utils.arrayToObjOnKey(metaData, "name");
    headers = columns.map(col => {
      return metaDataObj[col].label;
    });
    return headers;
  };

  render() {
    const { tableData } = this.props;
    const { records } = tableData;
    const headers = this.getTableHeaders();

    return (
      <div>
        <div className="table-label">
          <h2>Table Label</h2>
        </div>
        <Table headers={headers} records={records} />
      </div>
    );
  }
}
