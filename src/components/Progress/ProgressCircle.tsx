import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ProgressProps } from './typing';

interface ProgressCircleProps extends ProgressProps {
  prefixCls: string;
}

class ProgressCircle extends PureComponent<ProgressCircleProps> {
  public render() {
    return <div />;
  }
}

export default ProgressCircle;
