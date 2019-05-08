import React, { Component } from 'react';
import { Message, Button, Modal } from 'kui-mobile';

export default class Demo extends Component {
  handleAlert = () => {
    Modal.alert({
      title: '标题',
      content: '内容',
    });
  };
  handleConfirm = () => {};

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen} full onClick={this.handleAlert}>
          打开提示框
        </Button>
        <br />
        <Button onClick={this.handleOpen} full onClick={this.handleConfirm}>
          打开确认框
        </Button>
      </React.Fragment>
    );
  }
}
