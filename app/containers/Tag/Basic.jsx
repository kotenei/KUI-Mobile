import React, { Component } from 'react';
import { Tag } from 'kui-mobile';

export default class Example extends Component {
  handleClose = () => {
    alert('ok');
    return true;
  };
  render() {
    return (
      <React.Fragment>
        <Tag>default</Tag>
        <Tag closable>closable</Tag>
        <Tag closable color="primary">
          primary
        </Tag>
        <Tag closable color="info">
          info
        </Tag>
        <Tag closable color="success" onClose={this.handleClose}>
          success
        </Tag>
        <Tag closable color="warning">
          warning
        </Tag>
        <Tag closable color="danger">
          danger
        </Tag>
      </React.Fragment>
    );
  }
}
