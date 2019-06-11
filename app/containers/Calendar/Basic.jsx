import React, { Component } from 'react';
import { Calendar, Input } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        <Calendar />
      </React.Fragment>
    );
  }
}
