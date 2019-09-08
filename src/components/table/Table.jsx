import React, { Component, Fragment } from "react";

export default class Table extends Component {
  render() {
    return (
      <Fragment>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 1</td>
              <td>data 2</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
