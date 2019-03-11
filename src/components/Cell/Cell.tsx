import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CellProps } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-cell';

export default class Cell extends PureComponent<CellProps> {
  private static defaultProps = {
    border: false,
    disabled: false,
    showArrow: false,
    arrowDirection: 'right',
  };
  public renderCellLeft() {
    return <div className={`${prefixCls}-left`} />;
  }
  public renderCellRight() {
    return <div className={`${prefixCls}-right`} />;
  }
  public renderCellMiddle() {
    const { title, label, value, showArrow, arrowDirection, disabled } = this.props;
    return (
      <div
        className={classnames({
          [`${prefixCls}-middle`]: true,
          [`${prefixCls}-middle--disabled`]: !!disabled,
        })}
      >
        <div className={`${prefixCls}-middle__text`}>
          <div className={`${prefixCls}-middle__title`}>{title}</div>
          <div className={`${prefixCls}-middle__label`}>{label}</div>
        </div>
        <div className={`${prefixCls}-middle__value`}>
          {value}
          {showArrow ? <Icon type={arrowDirection} /> : null}
        </div>
      </div>
    );
  }
  public render() {
    const { className, border, ...others } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--border`]: !!border,
      },
      className,
    );

    return (
      <div className={classString}>
        {this.renderCellLeft()}
        {this.renderCellMiddle()}
        {this.renderCellRight()}
      </div>
    );
  }
}
