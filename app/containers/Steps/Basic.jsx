import React, { Component } from 'react';
import { Steps, Step } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <Steps current={1} status="process">
        <Step title="第一步" description="这里是描述" />
        <Step title="第二步" description="这里是描述" />
        <Step title="完成" description="这里是描述" />
      </Steps>
    );
  }
}
