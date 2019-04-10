import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { LazyLoadProps } from './typing';

const prefixCls = 'k-lazyload';

class LazyLoad extends PureComponent<LazyLoadProps> {
  public render() {
    const { className, style } = this.props;
    const classString = classnames({
      [prefixCls]: true,
    });
    return <div className={classString} style={style} />;
  }
}

export default LazyLoad;
