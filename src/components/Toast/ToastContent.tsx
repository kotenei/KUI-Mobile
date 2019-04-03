import React, { PureComponent, StatelessComponent } from 'react';
import classnames from 'classnames';
import { ToastProps, ToastState } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-toast';

const iconType = {
  loading: 'loading',
  success: 'check',
  warning: 'info',
  error: 'close',
};

const ToastContent: StatelessComponent<ToastProps> = props => {
  const { children, type } = props;
  const icon = type && iconType[type] ? <Icon type={iconType[type]} /> : null;
  return (
    <div className={prefixCls}>
      {icon && <div className={`${prefixCls}__icon`}>{icon}</div>}
      <div className={`${prefixCls}__content`}>{children}</div>
    </div>
  );
};

export default ToastContent;
