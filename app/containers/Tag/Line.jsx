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
        <Tag line>default</Tag>
        <Tag closable line>closable</Tag>
        <Tag closable color="primary" line>
          primary
        </Tag>
        <Tag closable color="info" line>
          info
        </Tag>
        <Tag closable color="success" onClose={this.handleClose} line>
          success
        </Tag>
        <Tag closable color="warning" line>
          warning
        </Tag>
        <Tag closable color="danger" line>
          danger
        </Tag>
      </React.Fragment>
    );
  }
}
