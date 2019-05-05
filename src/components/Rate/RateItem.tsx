import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { RateItemProps } from './typing';

const prefixCls = 'k-rate-star';

class RateItem extends PureComponent<RateItemProps> {
  private static defaultProps = {
    value: -1,
    current: -1,
  };

  public render() {
    const { value, current, character, allowHalf } = this.props;
    const classString = classnames({
      [`${prefixCls}`]: true,
      [`${prefixCls}--half`]: current === value - 0.5 && !!allowHalf,
      [`${prefixCls}--full`]: current >= value && value.toString().indexOf('.') === -1,
    });
    return (
      <li className={classString}>
        <div
          className={`${prefixCls}__first`}
          onTouchMove={this.handleFirstMove}
          onClick={this.handleFirstClick}
        >
          {character}
        </div>
        <div
          className={`${prefixCls}__second`}
          onTouchMove={this.handleSecondMove}
          onClick={this.handleSecondClick}
        >
          {character}
        </div>
      </li>
    );
  }

  private handleFirstMove = e => {
    const { allowHalf, value, onHover } = this.props;
    const val = allowHalf ? value - 0.5 : value;
    if (onHover) {
      onHover(value);
    }
  };

  private handleFirstClick = e => {
    const { allowHalf, value, onClick } = this.props;
    const val = allowHalf ? value - 0.5 : value;
    if (onClick) {
      onClick(val);
    }
  };

  private handleSecondMove = e => {
    const { onHover, value } = this.props;
    if (onHover) {
      onHover(value);
    }
  };

  private handleSecondClick = e => {
    const { value, onClick } = this.props;
    if (onClick) {
      onClick(value);
    }
  };
}

export default RateItem;
