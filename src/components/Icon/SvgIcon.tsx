import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SvgIconProps } from './typing';

const prefixCls = 'k-icon-svg';

export default class SvgIcon extends PureComponent<SvgIconProps> {
  private static defaultProps = {
    viewBox: '0 0 1024 1024',
  };
  public render() {
    const { children, className, fontSize, viewBox, title, color, style } = this.props;
    const _style = {
      fontSize,
      ...style,
      fill: `${color ? color : null}`,
    };
    const classString = classnames(prefixCls, className);

    return (
      <svg
        className={classString}
        focusable="false"
        viewBox={viewBox}
        fill={color}
        aria-hidden={title ? 'false' : 'true'}
        style={_style}
      >
        {title && <title>{title}</title>}
        {children}
      </svg>
    );
  }
}
