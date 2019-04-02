import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ToastProps, ToastState } from './typing';

const prefixCls = 'k-toast';

class Toast extends PureComponent<ToastProps, ToastState> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  public render() {
    return <div className={prefixCls} />;
  }
}

export default Toast;
