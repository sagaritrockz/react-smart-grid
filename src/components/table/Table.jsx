import React, { Component, Fragment } from "react";

export default class Table extends Component {
  render() {
    const { headers, records } = this.props;
    return (
      <Fragment>
        <table className="table table-bordered table-fixed">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th key={idx}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => (
              <tr key={idx}>
                {record.map((rec, idy) => (
                  <td key={idy}>{rec}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
