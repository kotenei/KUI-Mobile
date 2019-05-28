import React, { Component } from 'react';
import { Picker, Button, Toast } from 'kui-mobile';
import { provinceList } from '../../data/areaData';

const columns = [
  provinceList.map(item => {
    return {
      label: item.text,
      value: item.value,
    };
  }),
];

export default class Demo extends Component {
  state = {
    show: false,
    value: [],
  };
  componentDidMount() {}
  render() {
    const { show, value } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>打开</Button>
        <Picker
          data={columns}
          show={show}
          showHeader
          onCancel={this.handleCancel}
          onOK={this.handleOK}
          onChange={this.handleChange}
          value={value}
        />
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
  handleOK = value => {
    this.setState({
      value,
      show: false,
    });
  };
  handleChange = value => {
    Toast.info(`当前选中值：${value[0]}`);
  };
}
