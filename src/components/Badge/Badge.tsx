import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { BadgeProps } from './typing';

const prefixCls = 'k-badge';

class Badge extends PureComponent<BadgeProps> {
  private static defaultProps = {
    count: 0,
    color: 'primary',
    dot: false,
    overflowCount: 99,
  };
  public renderCount() {
    const { count, dot, overflowCount } = this.props;
    let num: any = count || 0;
    if (count !== undefined && count <= 0 && !dot) {
      return null;
    }
    if (dot) {
      return <sup className={`${prefixCls}__sup ${prefixCls}__dot`} />;
    }
    if (overflowCount !== undefined && count !== undefined && count > overflowCount) {
      num = overflowCount + '+';
    }
    return <sup className={`${prefixCls}__sup ${prefixCls}__count`}>{num}</sup>;
  }
  public render() {
    const { count, children, className, color } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--notwrap`]: !children,
      },
      className,
    );
    return (
      <span className={classString}>
        {children}
        {this.renderCount()}
      </span>
    );
  }
}

export default Badge;
