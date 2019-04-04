import React, { Component } from 'react';
import { Toast, Button } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          full
          onClick={() => {
            Toast.info('提示内容');
          }}
        >
          文字提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            let t = Toast.info('这是一条长文字提示，超过一定字数就会换行');
          }}
        >
          长文字提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.info('这是不带遮罩层提示', {
              mask: false,
            });
          }}
        >
          不带遮罩层
        </Button>
      </React.Fragment>
    );
  }
}
