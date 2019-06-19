import React, { Component } from 'react';
import { Calendar, Input } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    open: false,
  };
  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <Input onClick={this.handleClick} />
        <Calendar open={open} onCancel={this.handleCancel} />
      </React.Fragment>
    );
  }
  handleClick = () => {
    this.setState({
      open: true,
    });
  };
  handleCancel = () => {
    this.setState({
      open: false,
    });
  };
}
