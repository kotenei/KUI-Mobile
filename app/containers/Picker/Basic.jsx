import React, { Component } from 'react';
import { Picker, Button } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    show: false,
  };
  render() {
    const { show } = this.state;
    const columns = [
      [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' },
        { label: '选项4', value: '4' },
        { label: '选项5', value: '5' },
        { label: '选项6', value: '6' },
        { label: '选项7', value: '7' },
      ],
    ];
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>打开</Button>
        <Picker data={columns} show={show} showHeader onCancel={this.handleCancel} />
      </React.Fragment>
    );
  }
  handleClick = () => {
    this.setState({
      show: true,
    });
  };
  handleCancel = () => {
    this.setState({
      show: false,
    });
  };
}
