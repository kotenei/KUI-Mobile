import React, { Component } from 'react';
import { Tag } from 'kui-mobile';

export default class Example extends Component {
  handleClose = () => {
    return true;
  };
  render() {
    return (
      <React.Fragment>
        <Tag line>default</Tag>
        <Tag closable line onClose={this.handleClose}>closable</Tag>
        <Tag closable color="primary" line onClose={this.handleClose}>
          primary
        </Tag>
        <Tag closable color="info" line onClose={this.handleClose}>
          info
        </Tag>
        <Tag closable color="success" onClose={this.handleClose} line>
          success
        </Tag>
        <Tag closable color="warning" line onClose={this.handleClose}>
          warning
        </Tag>
        <Tag closable color="danger" line onClose={this.handleClose}>
          danger
        </Tag>
      </React.Fragment>
    );
  }
}
