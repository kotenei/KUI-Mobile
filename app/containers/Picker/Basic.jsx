import React, { Component } from 'react';
import { Picker, Button, Toast, Message } from 'kui-mobile';
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
    value: ['120000'],
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
    let selected = columns[0].find(item => item.value === value[0]);
    if(!selected){
      selected=columns[0]
    }
    Message(`选中了：${selected.label}`);
    this.setState({
      value,
      show: false,
    });
  };
  handleChange = value => {
    Toast.info(`当前选中值：${value[0]}`);
  };
}
